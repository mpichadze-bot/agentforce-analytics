#!/bin/bash
# Install and update git-sfdc according to Core-on-Git Software Updates documentation
# Based on: https://git.soma.salesforce.com/pages/dx/docs/core/core-on-git/setup/software-updates/

set -e

echo "=== Core-on-Git Software Updates Installation ==="
echo ""

# Check if git-sfdc is installed
if command -v git-sfdc &> /dev/null || git sfdc --version &> /dev/null; then
    echo "git-sfdc is already installed. Upgrading to latest version..."
    git sfdc upgrade
    echo ""
    echo "✅ Upgrade complete!"
    echo ""
    echo "Current version:"
    git sfdc --version
    exit 0
fi

echo "git-sfdc is not installed. Installing it first..."
echo ""

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "❌ Homebrew is required but not installed."
    echo ""
    echo "Please install Homebrew first by running:"
    echo "  /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo ""
    echo "After installation, add Homebrew to your PATH:"
    echo "  echo 'eval \"\$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zshrc  # Apple Silicon"
    echo "  # OR"
    echo "  echo 'eval \"\$(/usr/local/bin/brew shellenv)\"' >> ~/.zshrc     # Intel"
    echo "  source ~/.zshrc"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "✅ Homebrew is installed"
echo ""

# Ensure Homebrew is in PATH
if [ -f /opt/homebrew/bin/brew ]; then
    export PATH="/opt/homebrew/bin:$PATH"
elif [ -f /usr/local/bin/brew ]; then
    export PATH="/usr/local/bin:$PATH"
fi

# Step 1: Install Git and Git LFS (if not already installed)
echo "Step 1: Checking Git and Git LFS..."
if ! command -v git-lfs &> /dev/null; then
    echo "Installing Git and Git LFS..."
    brew install git git-lfs
else
    echo "✅ Git LFS is already installed"
fi

# Step 2: Set up Nexus credentials
echo ""
echo "Step 2: Setting up Nexus credentials..."
if command -v bootstrap &> /dev/null; then
    bootstrap bundle:netrc || echo "⚠️  Warning: bootstrap bundle:netrc failed. You may need to set up Nexus credentials manually."
else
    echo "⚠️  Warning: bootstrap command not found. You may need to set up Nexus credentials manually."
fi

# Step 3: Install internal Homebrew tap
echo ""
echo "Step 3: Installing internal Homebrew tap..."
brew tap productivity/sfdc https://git.soma.salesforce.com/productivity/homebrew-sfdc.git || echo "⚠️  Tap may already be installed"

# Step 4: Install git-sfdc-v2
echo ""
echo "Step 4: Installing git-sfdc-v2..."
brew install --overwrite git-sfdc-v2

# Step 5: Validate installation
echo ""
echo "Step 5: Validating installation..."
git --version && git-lfs --version && git-sfdc --version

echo ""
echo "=== Installation Complete ==="
echo ""
echo "✅ git-sfdc has been installed successfully!"
echo ""
echo "To upgrade git-sfdc in the future, run:"
echo "  git sfdc upgrade"
echo ""
echo "For release notes, see:"
echo "  https://git.soma.salesforce.com/gimlet-impl/git-sfdc-v2/blob/stable/RELEASE-NOTES.md"
echo ""

