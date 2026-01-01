# Quick Installation Guide - Run These Commands

Since Homebrew installation requires your password, please run these commands **one at a time** in your terminal:

## Step 1: Install Homebrew (requires your password)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**When prompted, enter your Mac password.**

## Step 2: Add Homebrew to PATH

**For Apple Silicon Macs (M1/M2/M3):**
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/opt/homebrew/bin/brew shellenv)"
```

**For Intel Macs:**
```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
eval "$(/usr/local/bin/brew shellenv)"
```

## Step 3: Run the automated setup script

```bash
cd /Users/mpichadze/agentforce-analytics
./setup-core-on-git.sh
```

This script will automatically:
- ✅ Install Git and Git LFS
- ✅ Set up Nexus credentials
- ✅ Install the internal Homebrew tap
- ✅ Install git-sfdc-v2
- ✅ Validate the installation

## Step 4: Verify Installation

After the script completes, verify everything works:

```bash
git --version && git-lfs --version && git-sfdc --version && brew info coreutils | head -1
```

You should see output like:
```
git version 2.45.2
git-lfs/3.4.0 (GitHub; darwin amd64; go 1.20.6)
git-sfdc version 2.54.0
==> coreutils: stable 9.3 (bottled), HEAD
```

---

## Alternative: Manual Installation

If you prefer to install everything manually, run these commands after Step 1 and 2:

```bash
# Install Git and Git LFS
brew install git git-lfs

# Set up Nexus credentials
bootstrap bundle:netrc

# Install internal Homebrew tap
brew tap productivity/sfdc https://git.soma.salesforce.com/productivity/homebrew-sfdc.git

# Install git-sfdc-v2
brew install --overwrite git-sfdc-v2

# Verify
git --version && git-lfs --version && git-sfdc --version
```

---

## Troubleshooting

**If you get "command not found" errors:**
- Make sure you completed Step 2 (adding Homebrew to PATH)
- Restart your terminal or run: `source ~/.zshrc`

**If Git version shows Apple Git instead of Homebrew Git:**
- Ensure Homebrew's Git takes precedence: `export PATH="/opt/homebrew/bin:$PATH"` (Apple Silicon) or `export PATH="/usr/local/bin:$PATH"` (Intel)
- Add this to your `~/.zshrc` to make it permanent

**If bootstrap bundle:netrc fails:**
- You may need to set up Nexus credentials manually
- See: https://git.soma.salesforce.com/pages/dx/docs/core/sfw/set-up-and-create/set-up/#nexus-token-id-nexus_token_id-and-hash-nexus_token_hash

