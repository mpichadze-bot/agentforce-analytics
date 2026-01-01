# Core-on-Git Required Software Setup

This guide will help you install the required software for Core-on-Git development.

## Prerequisites

- macOS (you're on macOS based on your system)
- Administrator access (sudo password required for Homebrew installation)
- Terminal access

## Installation Steps

### Step 1: Install Homebrew

Homebrew is required but not currently installed. Run this command in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Note:** This will prompt for your password (sudo access required).

After installation, add Homebrew to your PATH. For Apple Silicon Macs:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/opt/homebrew/bin/brew shellenv)"
```

For Intel Macs:
```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/usr/local/bin/brew shellenv)"
```

### Step 2: Install Git and Git LFS

```bash
brew install git git-lfs
```

**Important:** This will install Homebrew's Git, which is preferred over Apple's Git for Core-on-Git repos. Make sure Homebrew's Git takes precedence in your PATH.

### Step 3: Set up Nexus Credentials

```bash
bootstrap bundle:netrc
```

This sets up your Nexus credentials locally. See [Nexus ID and Hash](https://git.soma.salesforce.com/pages/dx/docs/core/sfw/set-up-and-create/set-up/#nexus-token-id-nexus_token_id-and-hash-nexus_token_hash) for more details.

### Step 4: Install Internal Homebrew Tap

```bash
brew tap productivity/sfdc https://git.soma.salesforce.com/productivity/homebrew-sfdc.git
```

### Step 5: Install git-sfdc-v2

```bash
brew install --overwrite git-sfdc-v2
```

### Step 6: Validate Installation

Run this command to verify everything is installed correctly:

```bash
git --version && git-lfs --version && git-sfdc --version && brew info coreutils | head -1
```

You should see output similar to:
```
git version 2.45.2
git-lfs/3.4.0 (GitHub; darwin amd64; go 1.20.6)
git-sfdc version 2.54.0
==> coreutils: stable 9.3 (bottled), HEAD
```

## Quick Setup Script

I've created a setup script (`setup-core-on-git.sh`) that automates these steps. However, **you'll need to run it manually** because:

1. Homebrew installation requires sudo access
2. Some steps may require interactive input

To use the script:

```bash
cd /Users/mpichadze/agentforce-analytics
./setup-core-on-git.sh
```

## Troubleshooting

### Git Version Issues

If you see Apple Git instead of Homebrew Git, ensure Homebrew's Git takes precedence:

```bash
# Check which git is being used
which git

# Should show /opt/homebrew/bin/git (Apple Silicon) or /usr/local/bin/git (Intel)
# If not, add to PATH:
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc  # Apple Silicon
# OR
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc     # Intel

# Then reload:
source ~/.zshrc
```

### Command Not Found Errors

If you get "command not found" errors after installation:
1. Ensure Homebrew is in your PATH (see above)
2. Restart your terminal or run `source ~/.zshrc`
3. Verify with `brew --version`

### Nexus Credentials Issues

If `bootstrap bundle:netrc` fails, you may need to:
1. Ensure you have Nexus credentials configured
2. Check the [Nexus setup documentation](https://git.soma.salesforce.com/pages/dx/docs/core/sfw/set-up-and-create/set-up/#nexus-token-id-nexus_token_id-and-hash-nexus_token_hash)

## Current Status

- ✅ Git is installed (version 2.50.1 - Apple Git)
- ❌ Homebrew is NOT installed
- ❌ Git LFS is NOT installed  
- ❌ git-sfdc is NOT installed

## Next Steps

1. **Install Homebrew** (requires sudo password)
2. **Run the setup script** or follow the manual steps above
3. **Validate** your installation
4. **Set up Git access** to gitcore.soma and git.soma

## References

- [Core-on-Git Documentation](https://git.soma.salesforce.com/pages/dx/docs/core/core-on-git/)
- [Required Software Page](https://git.soma.salesforce.com/pages/dx/docs/core/core-on-git/setup/required-software/)
- [Troubleshooting Guide](https://git.soma.salesforce.com/pages/dx/docs/core/core-on-git/troubleshooting/troubleshooting/)

