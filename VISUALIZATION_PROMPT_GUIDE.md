# Meeting Visualization Prompt Guide

This guide provides step-by-step prompts for creating workflow and UX findings visualizations from meeting notes.

---

## PART 1: VIEW WORKFLOW PAGE

### Purpose
The Workflow page shows the **process, methodology, and current state** of how the team/customer works with the product.

### Step-by-Step Reasoning

#### STEP 1: Extract Header Information
```
PROMPT: Analyze the meeting notes and extract:
1. Company/Team name (e.g., "Indeed", "Cellebrite", "Nexo", "Help Agent")
2. Main topic/focus (e.g., "Observability Workflow", "Agent Analytics")
3. Meeting date
4. Brief subtitle describing what the meeting is about

FORMAT AS:
- Badge: [Company] × Agentforce
- Title: Main focus area
- Subtitle: One-line description
- Date: Meeting date
```

**Reasoning:** The header sets context and helps users quickly identify what this visualization is about.

---

#### STEP 2: Identify Current State / Past Experience
```
PROMPT: From the meeting notes, identify the CURRENT or PAST state:

Ask yourself:
1. What tools/processes are they currently using?
2. What did they try before?
3. What's working? What's not working?
4. Are they using workarounds?
5. What manual processes have they created?

Extract:
- Tool/process name
- Status (e.g., "Not Efficient", "Stopped Using", "Current Solution")
- Brief description of what it does
- Pain points or reasons for current state

FORMAT AS nodes showing:
- Icon representing the tool/process
- Status badge (color-coded by state)
- Description
- Expandable details on click
```

**Reasoning:** Understanding where users are coming from is critical. Their current state reveals pain points and unmet needs.

---

#### STEP 3: Map the Workflow/Process Flow
```
PROMPT: Identify the step-by-step process or workflow described in the meeting:

Ask yourself:
1. What steps do they follow? (e.g., Customer Chat → N8N → Classification)
2. What's the sequence of events?
3. Are there parallel processes?
4. What are the decision points?
5. What are the outputs of each step?

For each step, extract:
- Step name
- What happens in this step
- Key details or sub-processes
- Connections to next steps

FORMAT AS:
- Sequential flow nodes connected by arrows
- Each node expandable for details
- Visual indicators (icons) for each step type
```

**Reasoning:** Visualizing the flow helps identify bottlenecks, inefficiencies, and opportunities for improvement.

---

#### STEP 4: Extract Key Metrics/Measurements
```
PROMPT: Identify all metrics mentioned in the meeting:

Ask yourself:
1. What KPIs are they tracking?
2. What are the "super important" metrics?
3. How are they measured? (calculation method)
4. What are the targets or goals?
5. What metrics do executives care about?

For each metric, extract:
- Metric name
- How it's calculated
- Why it matters
- Current performance (if mentioned)
- Any issues with the metric

FORMAT AS:
- Metric cards with clear labels
- Calculation details on expand
- Visual hierarchy (primary vs secondary metrics)
- Color coding by importance/status
```

**Reasoning:** Metrics are what teams use to make decisions. Understanding what they measure reveals what they care about.

---

#### STEP 5: Identify Scale Challenges
```
PROMPT: Look for mentions of scale, volume, or growth:

Ask yourself:
1. Current volume/scale? (e.g., "250K/week")
2. Target volume/scale? (e.g., "2M/month")
3. Why is scale a challenge?
4. What breaks at scale?
5. What needs to scale?

FORMAT AS:
- "Current → Goal" visual
- Highlight the gap
- Show implications of scale
```

**Reasoning:** Scale challenges often drive tool requirements and reveal what features are essential vs nice-to-have.

---

#### STEP 6: Extract Methodology/Approach
```
PROMPT: Identify the team's approach or methodology:

Ask yourself:
1. What frameworks are they using? (e.g., "LLM as Judge")
2. What's their process for solving problems?
3. How many steps in their process?
4. What tools/techniques do they use?

For each methodology:
- Name of the approach
- Steps in the process
- Tools/techniques used
- Purpose/goal of this approach

FORMAT AS:
- Step-by-step process visualization
- Each step expandable
- Show flow between steps
```

**Reasoning:** Understanding their methodology reveals their mental model and how they think about solving problems.

---

#### STEP 7: Identify Pain Points (High-Level)
```
PROMPT: From the meeting, extract MAJOR pain points:

Ask yourself:
1. What did they explicitly say is painful?
2. What makes them frustrated?
3. What takes too much time?
4. What's blocking them?
5. What would they change if they could?

For each pain point:
- Title (clear, specific)
- Brief description
- Quote from meeting (if available)
- Why it's a problem

FORMAT AS:
- Cards with severity indicators
- Icons representing the problem type
- Expandable for more details
```

**Reasoning:** Pain points on the workflow page should be high-level - detailed analysis goes in UX Findings.

---

#### STEP 8: Show Desired Future State
```
PROMPT: Extract what the team wants in the future:

Ask yourself:
1. What features did they request?
2. What would solve their pain points?
3. What capabilities do they need?
4. What would make them successful?

For each desired feature:
- Feature name
- Why they need it
- Expected benefit
- Priority level (if mentioned)

FORMAT AS:
- Visual showing "Desired State"
- Feature cards or requirement lists
- Validation quotes (e.g., "Perfect!", "This is exactly what I need")
```

**Reasoning:** The desired future state shows where the product should go and validates design decisions.

---

### Complete Workflow Page Template

```
STRUCTURE:
1. Header (Company × Agentforce, Title, Subtitle, Date)
2. Current/Past State section
   - Show existing tools/processes
   - Status indicators
3. Process Flow section
   - Sequential steps
   - Connected by arrows
4. Metrics section
   - Key measurements
   - How they're calculated
5. Methodology section (if applicable)
   - Team's approach
   - Process steps
6. Pain Points section
   - High-level issues
7. Desired Future State section
   - Required features
   - Validation wins
8. Footer
   - Link to UX Findings page
```

---

## PART 2: VIEW UX FINDINGS PAGE

### Purpose
The UX Findings page provides **detailed analysis** of pain points, desired features, and key insights with quotes and rationale.

### Step-by-Step Reasoning

#### STEP 1: Extract Detailed Pain Points
```
PROMPT: Create a comprehensive list of pain points from the meeting:

For EACH pain point, extract:

1. ID: Unique identifier (e.g., "non-actionable-metrics")
2. Icon: What type of problem? (Settings, XCircle, AlertTriangle, etc.)
3. Title: Clear, specific name
4. Severity: critical | high | medium
5. Description: One-sentence summary
6. Quote: Exact words from meeting participant
7. Impact: What's the consequence of this pain?
8. Symptoms/Examples: Specific manifestations

SEVERITY GUIDELINES:
- CRITICAL: Blocking usage, deal-breaker, forces workarounds
- HIGH: Significantly impacts productivity or accuracy
- MEDIUM: Annoying but manageable

Ask yourself for each pain:
- Is this explicitly stated or implied?
- What's the root cause vs symptom?
- How does this impact their work?
- What quote best captures this pain?

FORMAT AS:
{
  id: 'unique-id',
  icon: IconComponent,
  title: 'Clear Problem Title',
  severity: 'critical',
  description: 'One-sentence summary',
  quote: '"Exact quote from participant"',
  impact: 'What happens because of this',
  symptoms: [
    'Specific example 1',
    'Specific example 2',
    'Specific example 3'
  ]
}
```

**Reasoning:** Pain points must be specific and actionable. Vague pain points don't help product teams. Quotes provide authenticity and weight.

---

#### STEP 2: Extract Desired Features
```
PROMPT: Create a comprehensive list of requested or desired features:

For EACH desired feature, extract:

1. ID: Unique identifier
2. Icon: What type of feature? (Settings, Table, Brain, etc.)
3. Title: Feature name
4. Priority: deal-breaker | critical | must-have | should-have | nice-to-have
5. Quote: Request in participant's words
6. Rationale: WHY they need this
7. Benefits: Specific outcomes if implemented

PRIORITY GUIDELINES:
- DEAL-BREAKER: "Won't use product without this"
- CRITICAL: Essential for core workflow
- MUST-HAVE: Needed for success
- SHOULD-HAVE: Important but can work without temporarily
- NICE-TO-HAVE: Enhancement

Ask yourself for each feature:
- Did they explicitly request this?
- What pain point does this solve?
- What's the underlying need?
- How strongly did they express the need?
- What would success look like?

FORMAT AS:
{
  id: 'unique-id',
  icon: IconComponent,
  title: 'Feature Name',
  priority: 'must-have',
  quote: '"Request in their words"',
  rationale: 'Why they need this feature',
  benefits: [
    'Specific benefit 1',
    'Specific benefit 2',
    'Specific benefit 3'
  ]
}
```

**Reasoning:** Features must be tied to explicit needs. Priority helps teams focus. Benefits justify the investment.

---

#### STEP 3: Extract Key Insights
```
PROMPT: Identify breakthrough insights, validations, and strategic learnings:

For EACH insight, extract:

1. ID: Unique identifier
2. Icon: Represents the insight type
3. Title: Insight headline
4. Type: validation | insight | context | revelation | strategy | process
5. Quote: Supporting quote from meeting
6. Insight: What was learned/discovered
7. Significance: Why this matters for product development

INSIGHT TYPES:
- VALIDATION: Confirms a design decision is correct (e.g., "Categories are perfect")
- INSIGHT: New understanding or discovery (e.g., "Heat maps don't work for this use case")
- CONTEXT: Background information (e.g., "Only 2 agents, not 20")
- REVELATION: Breakthrough moment (e.g., "Hallucinations were actually retriever errors")
- STRATEGY: Approach or methodology (e.g., "Production-first focus")
- PROCESS: How they work (e.g., "Symptoms before root causes")

Ask yourself for each insight:
- What did we learn that we didn't know before?
- What assumption was validated or invalidated?
- What surprised us?
- What changes how we should think about the product?
- What's the "aha!" moment?

FORMAT AS:
{
  id: 'unique-id',
  icon: IconComponent,
  title: 'Insight Headline',
  type: 'validation',
  quote: '"Supporting quote"',
  insight: 'What was learned/discovered - 2-3 sentences',
  significance: 'Why this matters for product - 1-2 sentences'
}
```

**Reasoning:** Insights are the gold - they change how you build the product. They must be captured with context and significance.

---

### Complete UX Findings Page Template

```
STRUCTURE:
1. Header
   - Company × Agentforce badge
   - Title: "UX Findings & Insights"
   - Subtitle
   - Participants list

2. Tab Navigation
   - Pain Points tab
   - Desired Features tab
   - Key Insights tab

3. Pain Points Tab Content
   - Grid of expandable pain cards
   - Each shows: icon, title, severity, description, quote
   - On expand: impact + symptoms/examples

4. Desired Features Tab Content
   - Grid of expandable feature cards
   - Each shows: icon, title, priority, quote
   - On expand: rationale + benefits list

5. Key Insights Tab Content
   - List of expandable insight cards
   - Each shows: icon, type label, title, quote
   - On expand: full insight + significance

6. Footer
   - Source + date
   - Link back to Workflow page
```

---

## EXTRACTION CHECKLIST

### Before You Start
- [ ] Read entire meeting transcript/notes
- [ ] Identify key participants and their roles
- [ ] Note the meeting purpose/context
- [ ] Highlight direct quotes throughout

### For Workflow Page
- [ ] Current state/tools identified
- [ ] Process flow mapped out
- [ ] Metrics extracted with calculations
- [ ] Scale challenges noted
- [ ] Methodology/approach documented
- [ ] Pain points listed (high-level)
- [ ] Desired features captured
- [ ] Validation quotes collected

### For UX Findings Page
- [ ] 6-10 detailed pain points with severity
- [ ] 8-12 desired features with priority
- [ ] 8-12 key insights with type classification
- [ ] Every item has a supporting quote
- [ ] Impact/rationale/significance documented
- [ ] Examples and symptoms specific

---

## QUOTE EXTRACTION BEST PRACTICES

### How to Extract Good Quotes

```
PROMPT: Find quotes that are:

1. SPECIFIC: "Heat maps are confusing" ✅ vs "I don't like this" ❌
2. ACTIONABLE: Points to a solution
3. EMOTIONAL: Shows strength of feeling
4. MEMORABLE: Captures essence of the point

TYPES OF QUOTES TO CAPTURE:
- Explicit requests: "I need X"
- Pain expressions: "This is painful because..."
- Validations: "This is perfect!"
- Deal-breakers: "If we can't X, we won't use it"
- Explanations: "The reason why..." 
- Comparisons: "Better than..." / "Worse than..."

FORMATTING:
- Use exact words (don't paraphrase)
- Include enough context to understand
- Mark with quotation marks
- Attribute if multiple speakers
```

---

## CATEGORIZATION FRAMEWORKS

### Pain Point Severity Matrix

```
CRITICAL (Deal-breakers):
- Blocks core workflow
- Forces manual workarounds
- Causes abandonment of tool
- Creates trust issues
- Makes product unusable

Examples:
- "Can't customize → stopped using Agent Studio"
- "Metrics don't match our calculations"
- "Lack of tooling for root cause analysis"

HIGH (Significant Impediments):
- Major time waste
- Frequent source of frustration
- Requires significant workarounds
- Impacts quality of work

Examples:
- "Manual Excel exports for all analysis"
- "No way to drill down from metrics"
- "Heat maps are unintuitive"

MEDIUM (Annoying but Manageable):
- Minor inconveniences
- Occasional frustration
- Has workarounds
- Doesn't block core workflow

Examples:
- "Table view needs better formatting"
- "Too many navigation tabs"
```

---

### Feature Priority Framework

```
DEAL-BREAKER / CRITICAL:
- Explicitly stated as non-negotiable
- "Won't use product without this"
- Solves a critical pain point
- Core to their workflow

Examples:
- "If we cannot customize, we would not use the product"
- "What if analysis capability" (for simulation)
- "Fully customizable dashboard"

MUST-HAVE:
- Needed for successful adoption
- Solves high-severity pain
- Explicitly requested multiple times
- Enables core use cases

Examples:
- "Granular table view is most critical"
- "Inline editing on dashboard"
- "Drill-down capability"

SHOULD-HAVE:
- Highly desired
- Improves experience significantly
- Mentioned positively
- Solves medium pains

Examples:
- "Color coding on metrics"
- "Bar charts over line graphs"
- "Top 10 lists instead of heat maps"

NICE-TO-HAVE:
- Enhancement
- Mentioned in passing
- "Would be cool if..."
- Not blocking anything

Examples:
- "Voice/tone metrics"
- "Future roadmap features"
```

---

### Insight Type Classification

```
VALIDATION (Confirms design decision):
- "This is perfect"
- "Exactly what I need"
- "This is right"
Look for: Positive affirmation of prototype features

INSIGHT (New understanding):
- "I never thought about it that way"
- "The real problem is..."
- Reveals mental model
Look for: New information that changes understanding

CONTEXT (Background information):
- User's environment
- Constraints
- Use case specifics
Look for: "We have...", "Our situation is..."

REVELATION (Breakthrough discovery):
- Root cause identified
- "Aha!" moment
- Changes everything
Look for: "Actually, it's...", "We discovered..."

STRATEGY (Approach/methodology):
- How they work
- Decision-making process
- Prioritization logic
Look for: "We prioritize...", "Our approach is..."

PROCESS (Workflow details):
- Step-by-step activities
- Sequences
- Dependencies
Look for: "First we..., then we..."
```

---

## COMPLETE PROMPT TEMPLATE

### Use This Prompt With Any Meeting Notes:

```
You are creating two interactive visualizations from meeting notes: a Workflow page and a UX Findings page.

MEETING CONTEXT:
[Paste meeting notes here]

TASK 1 - WORKFLOW PAGE:
Create a workflow visualization with these sections:

1. HEADER
   - Extract: Company name, main topic, meeting date
   - Format: [Company] × Agentforce | [Topic] | [Subtitle] | [Date]

2. CURRENT/PAST STATE
   - What tools/processes are they using now?
   - What did they try before?
   - Status of each (working, stopped using, inefficient, etc.)

3. PROCESS FLOW
   - Map the step-by-step workflow they described
   - Show sequential flow with arrows
   - Include decision points and branches

4. METRICS
   - List all KPIs mentioned
   - How each is calculated
   - Primary vs secondary metrics
   - Any metric issues or discrepancies

5. SCALE CHALLENGES
   - Current volume → Target volume
   - What breaks at scale?

6. METHODOLOGY/APPROACH
   - Frameworks they use
   - Problem-solving process
   - Number of steps and what each does

7. HIGH-LEVEL PAIN POINTS
   - Major obstacles (4-6 items)
   - Brief description each

8. DESIRED FEATURES
   - What they want
   - Validation wins ("Perfect!")

TASK 2 - UX FINDINGS PAGE:
Create detailed findings with 3 tabs:

TAB 1 - PAIN POINTS (6-10 items):
For each pain point, extract:
- ID, icon, title
- Severity: critical | high | medium
- Description (one sentence)
- Quote from participant
- Impact statement
- Symptoms/examples (3-5 specific items)

TAB 2 - DESIRED FEATURES (8-12 items):
For each feature, extract:
- ID, icon, title
- Priority: deal-breaker | critical | must-have | should-have | nice-to-have
- Quote from participant
- Rationale (why they need it)
- Benefits (4-6 specific outcomes)

TAB 3 - KEY INSIGHTS (8-12 items):
For each insight, extract:
- ID, icon, title
- Type: validation | insight | context | revelation | strategy | process
- Quote from participant
- Insight (what was learned, 2-3 sentences)
- Significance (why it matters, 1-2 sentences)

RULES:
1. Use EXACT quotes from meeting (don't paraphrase)
2. Be specific - vague findings aren't useful
3. Include severity/priority on everything
4. Connect pain points to desired features
5. Capture both explicit statements and implied needs
6. Note who said what (attribute quotes)
7. Identify patterns across the conversation
8. Highlight deal-breakers and validations

OUTPUT FORMAT:
Provide structured data for each section that can be directly used in React components.
```

---

## EXAMPLE EXTRACTION (Cellebrite Meeting)

### Example Pain Point Extraction

**Original Meeting Note:**
> "Yoav Silberman: I hate heat maps. I never never understood heat maps."
> "Gyora Turel: You cannot use more than three colors for a heat map because then the four and five is blurred."

**Extracted Pain Point:**
```javascript
{
  id: 'heat-maps',
  icon: Palette,
  title: 'Heat Maps Are Confusing',
  severity: 'high',
  description: 'Heat maps require memorizing color meanings and are difficult to interpret',
  quote: '"I hate heat maps. I never never understood heat maps."',
  impact: 'Wasted time trying to understand visualizations',
  symptoms: [
    'Too many colors blur the data (can\'t distinguish 4 from 5)',
    'Red stands out, but everything else is blurred',
    'Must memorize what each color means',
    'Prefer simple: good (green), bad (red), passive'
  ]
}
```

**Reasoning for extraction:**
- **Severity = HIGH**: Strong negative reaction ("hate"), but not blocking core workflow
- **Quote**: Used most emphatic statement
- **Symptoms**: Combined insights from both participants
- **Impact**: Inferred from context - confusion = wasted time

---

### Example Desired Feature Extraction

**Original Meeting Note:**
> "Yoav Silberman: If I would have even an inline editing on this dashboard, that would be perfect because I've got everything that I need and I just I'm just going to add my own columns."

**Extracted Desired Feature:**
```javascript
{
  id: 'inline-editing',
  icon: Edit3,
  title: 'Inline Editing for Custom Columns',
  priority: 'must-have',
  quote: '"If I would have even an inline editing on this dashboard, that would be perfect."',
  rationale: 'Users need to add context and categorization specific to their business without exporting to Excel',
  benefits: [
    'Add customer type, score, reasoning directly in dashboard',
    'No need to export to Excel',
    'Context stays with the data',
    'Can create custom views for management',
    'Eliminates manual workaround'
  ]
}
```

**Reasoning for extraction:**
- **Priority = MUST-HAVE**: Said "perfect", currently using painful Excel workaround
- **Benefits**: Inferred from their current Excel process (adds columns for customer type, score, reasoning)
- **Rationale**: Connects to their manual workflow pain point

---

### Example Key Insight Extraction

**Original Meeting Note:**
> "Yoav Silberman: The metric cards were 'beautiful' but the session table view was the most critical feature needed to assess usefulness."

**Extracted Insight:**
```javascript
{
  id: 'beautiful-not-useful',
  icon: Eye,
  title: 'Beautiful ≠ Useful',
  type: 'insight',
  quote: '"Metric cards were \'beautiful\' but the session table view was the most critical feature"',
  insight: 'Users appreciate good design but prioritize functionality and granular data access over aesthetics. Pretty dashboards that don\'t enable deep analysis are not valuable.',
  significance: 'Don\'t sacrifice utility for beauty - data access and analysis capabilities are paramount. Design should serve function, not replace it.'
}
```

**Reasoning for extraction:**
- **Type = INSIGHT**: Reveals priority hierarchy (function > form)
- **Significance**: Actionable guidance for product design philosophy
- **Universal application**: This insight applies broadly, not just to this user

---

## PATTERN RECOGNITION PROMPTS

### Finding Hidden Pain Points

```
PROMPT: Identify pain points that aren't explicitly stated:

Look for:
1. WORKAROUNDS: "What I do is..." = Something is missing
2. TIME MENTIONS: "I spend hours..." = Inefficiency
3. FRUSTRATION MARKERS: "Unfortunately...", "The problem is..."
4. COMPARISON LOSSES: "Unlike X, this doesn't..." = Gap
5. IMPOSSIBILITIES: "I can't...", "There's no way to..." = Missing capability
6. MANUAL PROCESSES: Detailed Excel/spreadsheet workflows = Tooling gap

Example:
"I take everything into an Excel file and I have every feedback from the last three weeks."
↓
PAIN POINT: Forced to export all data to Excel to create actionable insights
```

---

### Finding Validation Wins

```
PROMPT: Identify what's working in the prototype:

Look for:
1. "Perfect!"
2. "Exactly what I need"
3. "This is right"
4. "10x better"
5. "Very good/powerful"
6. Enthusiastic descriptions
7. Confirming questions answered with "Yes!"

These become VALIDATION insights and guide what to keep/emphasize.
```

---

### Finding Deal-Breakers

```
PROMPT: Identify non-negotiable requirements:

Look for:
1. "If we can't X, we won't use it"
2. "Without X, this doesn't work"
3. "X is critical to our organization"
4. "We stopped using Y because it didn't have X"
5. Strong negative reactions
6. Abandonment stories

These become DEAL-BREAKER or CRITICAL priority features.
```

---

## QUALITY CHECKLIST

### Before Finalizing Your Extraction:

**Pain Points:**
- [ ] Each has exact quote from meeting
- [ ] Severity assigned based on impact
- [ ] Impact statement is clear and specific
- [ ] 3-5 concrete symptoms/examples provided
- [ ] Not vague or generic

**Desired Features:**
- [ ] Each has exact quote showing request
- [ ] Priority reflects urgency in meeting
- [ ] Rationale explains the "why"
- [ ] 4-6 specific benefits listed
- [ ] Connected to pain points they solve

**Key Insights:**
- [ ] Each has supporting quote
- [ ] Type correctly classified
- [ ] Insight provides new understanding
- [ ] Significance explains "so what?"
- [ ] Actionable for product team

**Overall:**
- [ ] No assumptions without evidence
- [ ] Quotes are exact (not paraphrased)
- [ ] Specific examples provided
- [ ] Organized logically
- [ ] Balanced across categories

---

## ADVANCED TECHNIQUES

### Triangulation

```
PROMPT: Verify findings across multiple mentions:

If something is mentioned 3+ times or by 2+ people:
- Increase priority/severity
- Note frequency in significance
- May indicate deep pain or strong need

Example: If both participants hate heat maps → HIGH severity confirmed
```

---

### Context Matters

```
PROMPT: Always consider:

1. WHO said it?
   - VP vs analyst may have different priorities
   - Domain expert vs general user

2. HOW STRONGLY?
   - "Nice to have" vs "Critical" vs "Deal-breaker"
   - Tone and emphasis matter

3. WHEN in conversation?
   - First mention (top of mind) vs casual mention
   - Unprompted vs in response to question

4. WHAT triggered it?
   - Seeing specific UI element
   - Describing current pain
   - Answering direct question
```

---

### Connecting the Dots

```
PROMPT: Create connections between findings:

For each pain point, ask:
- What desired feature would solve this?
- What insight explains why this is painful?
- What other pains are related?

For each desired feature, ask:
- What pain does this solve?
- What insight supports this need?
- What validation confirms this direction?

For each insight, ask:
- What pain does this explain?
- What feature does this guide?
- What assumption does this validate/invalidate?
```

---

## VISUAL DESIGN GUIDANCE

### Icon Selection

```
For Pain Points:
- XCircle: Missing capability, failure
- AlertTriangle: Warning, danger, critical issue
- Search: Investigation, visibility problem
- Eye: Can't see, black box
- Settings: Configuration, customization issue
- BarChart: Metrics, data problems
- FileQuestion: Unknown, unclear

For Desired Features:
- Settings: Customization
- Table: Data views
- Edit3: Editing capabilities
- Target: Accuracy, precision
- Brain: AI/intelligence
- Zap: Speed, automation
- Eye: Visibility
- Home: Dashboard, homepage

For Insights:
- Lightbulb: Discovery, idea
- CheckCircle: Validation, success
- Star: Top priority, valuable
- Brain: Understanding, learning
- TrendingUp: Strategy, improvement
- Users: People, team, process
```

---

## FINAL PROMPT FOR AGENT

```
COMPLETE PROMPT TO GIVE AN AI AGENT:

"Analyze the following meeting transcript and create two comprehensive visualizations:

**CONTEXT:**
[Paste meeting notes]

**OUTPUT REQUIRED:**

1. WORKFLOW PAGE DATA
   Extract and format:
   - Header info (company, topic, date, participants)
   - Current state (tools/processes being used)
   - Process flow (step-by-step workflow)
   - Metrics (KPIs, calculations, targets)
   - Scale challenges (current → goal)
   - Methodology (approach, frameworks)
   - Pain points (high-level, 4-6 items)
   - Desired features (with validation quotes)

2. UX FINDINGS PAGE DATA
   Extract and format:
   - Pain Points (6-10 items)
     * Each with: id, icon, title, severity, description, quote, impact, symptoms
   - Desired Features (8-12 items)
     * Each with: id, icon, title, priority, quote, rationale, benefits
   - Key Insights (8-12 items)
     * Each with: id, icon, title, type, quote, insight, significance

**REQUIREMENTS:**
- Use EXACT quotes from meeting (never paraphrase)
- Assign severity/priority based on evidence
- Provide 3-5 specific examples per item
- Connect pain points to features to insights
- Capture both explicit and implied needs
- Note who said what
- Include context for quotes

**FORMAT:**
Provide as JavaScript objects ready for React components.

**FOCUS AREAS:**
- What's painful for users?
- What do they explicitly request?
- What validates our design?
- What invalidates our assumptions?
- What's the "aha!" moment?
- What are the deal-breakers?
- What would make them successful?"
```

---

## TIPS FOR SUCCESS

1. **Read Multiple Times**: First for overview, second for details, third for quotes
2. **Highlight as You Go**: Mark pain points (red), features (green), insights (yellow)
3. **Use Timestamps**: Reference specific parts of transcript
4. **Note Tone**: Enthusiasm, frustration, emphasis matter
5. **Cross-Reference**: Same topic mentioned multiple times = higher priority
6. **Question Everything**: "Is this a pain or just a preference?", "How severe really?"
7. **Be Specific**: "Metrics aren't actionable" → "Can't drill down from 63% escalation rate to see why"
8. **Validate Extraction**: Would someone who wasn't in the meeting understand this?

---

## COMMON MISTAKES TO AVOID

❌ **DON'T:**
- Paraphrase quotes
- Make assumptions
- Be vague ("better UX")
- Ignore context
- Mix severity levels
- Skip rationale/significance
- Forget examples

✅ **DO:**
- Use exact words
- Stay grounded in evidence
- Be specific ("inline editing")
- Include context
- Assign appropriate severity
- Explain why it matters
- Provide concrete examples

---

## VALIDATION QUESTIONS

Before you finish, ask:

**For Pain Points:**
1. Is the severity justified by evidence?
2. Is the impact clear and specific?
3. Are symptoms concrete examples?
4. Would fixing this solve a real problem?

**For Desired Features:**
1. Was this explicitly requested?
2. Is the priority supported by how it was discussed?
3. Are benefits specific and measurable?
4. Does the rationale explain the underlying need?

**For Insights:**
1. Is this actually new/valuable information?
2. Does the quote support the insight?
3. Is the significance actionable?
4. Would a product manager find this useful?

---

*This guide enables consistent, high-quality extraction of insights from any customer meeting or usability study.*

