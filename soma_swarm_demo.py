import asyncio
from typing import TypedDict, List, Annotated
import operator

# 1. Define the Shared State (The "Inbox")
class SwarmState(TypedDict):
    # The full stream of data (initially large, gets chunked)
    raw_logs: List[str]
    # The "Inbox" where workers dump their findings
    flagged_events: Annotated[List[str], operator.add] 
    # Final summary status
    report_status: str

# 2. Define the "Worker Bee" (Single Objective)
async def log_inspector_agent(log_batch: List[str]) -> List[str]:
    """
    The SOMA Worker: Identical copies of this run in parallel.
    It has ONE goal: Find 'CRITICAL' errors.
    """
    found_flags = []
    print(f"--- [Worker] Processing batch of {len(log_batch)} logs ---")
    
    # In reality, this is an LLM call or a regex check
    for log in log_batch:
        if "UNAUTHORIZED_ACCESS" in log:
             # Heuristic check
            found_flags.append(f"FLAGGED: {log}")
        elif "ROOT_SHELL" in log:
            found_flags.append(f"CRITICAL: {log}")
            
    return found_flags

# 3. Define the Manager (The Orchestrator)
async def swarm_manager(state: SwarmState):
    """
    The SOMA Manager: Distributes work and aggregates results.
    """
    print("--- [Manager] Distributing Stream ---")
    
    # 1. Shard the stream (Divide)
    chunk_size = 2 # Small for demo purposes
    batches = [state['raw_logs'][i:i + chunk_size] 
               for i in range(0, len(state['raw_logs']), chunk_size)]
    
    # 2. Fan-out (Map) - Launch parallel workers
    # In a real framework, this executes on different threads/containers
    tasks = [log_inspector_agent(batch) for batch in batches]
    results = await asyncio.gather(*tasks)
    
    # 3. Aggregate (Reduce) - Flatten the list of lists
    all_flags = [flag for sublist in results for flag in sublist]
    
    return {"flagged_events": all_flags, "report_status": "DONE"}

# 4. Simulation
async def run_soma_stream():
    # A stream of homogeneous data
    stream_data = [
        "2023-10-27 INFO: User login success",
        "2023-10-27 WARN: High memory usage",
        "2023-10-27 ERROR: UNAUTHORIZED_ACCESS from IP 192.168...", 
        "2023-10-27 INFO: User logout",
        "2023-10-27 CRITICAL: ROOT_SHELL spawned by unknown user",
        "2023-10-27 INFO: Backup started"
    ]
    
    initial_state = {
        "raw_logs": stream_data, 
        "flagged_events": [], 
        "report_status": "PENDING"
    }
    
    print(">>> STARTING SOMA SWARM <<<")
    
    final_state = await swarm_manager(initial_state)
    
    print("\n>>> FINAL REPORT <<<")
    print(f"Total Logs Processed: {len(stream_data)}")
    flagged = final_state['flagged_events']
    print(f"Anomalies Found: {len(flagged)}")
    for flag in flagged:
        print(f" -> {flag}")

# Run the async loop
if __name__ == "__main__":
    asyncio.run(run_soma_stream())

