#!/bin/bash
# Setup script for Core-on-Git required software
# Based on: https://git.soma.salesforce.com/pages/dx/docs/core/core-on-git/setup/required-software/

set -e

echo "=== Core-on-Git Required Software Setup ==="
echo ""

# Step 1: Check Homebrew
echo "Step 1: Checking Homebrew installation..."
if ! command -v brew &> /dev/null; then
    echo ""
    echo "❌ ERROR: Homebrew is not installed!"
    echo ""
    echo "Please install Homebrew first by running this command in your terminal:"
    echo "  /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo ""
    echo "After installation, add Homebrew to your PATH:"
    echo "  For Apple Silicon Macs:"
    echo "    echo 'eval \"\$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zshrc"
    echo "    eval \"\$(/opt/homebrew/bin/brew shellenv)\""
    echo "  For Intel Macs:"
    echo "    echo 'eval \"\$(/usr/local/bin/brew shellenv)\"' >> ~/.zshrc"
    echo "    eval \"\$(/usr/local/bin/brew shellenv)\""
    echo ""
    echo "Then run this script again."
    exit 1
else
    echo "✅ Homebrew is installed: $(brew --version)"
fi

# Ensure Homebrew is in PATH
if [ -f /opt/homebrew/bin/brew ]; then
    export PATH="/opt/homebrew/bin:$PATH"
elif [ -f /usr/local/bin/brew ]; then
    export PATH="/usr/local/bin:$PATH"
fi

# Step 2: Install Git and Git LFS
echo ""
echo "Step 2: Installing Git and Git LFS..."
brew install git git-lfs

# Step 3: Set up Nexus credentials
echo ""
echo "Step 3: Setting up Nexus credentials..."
echo "Running: bootstrap bundle:netrc"
bootstrap bundle:netrc || echo "Warning: bootstrap bundle:netrc failed. You may need to set up Nexus credentials manually."

# Step 4: Install internal Homebrew tap
echo ""
echo "Step 4: Installing internal Homebrew tap..."
brew tap productivity/sfdc https://git.soma.salesforce.com/productivity/homebrew-sfdc.git

# Step 5: Install git-sfdc-v2
echo ""
echo "Step 5: Installing git-sfdc-v2..."
brew install --overwrite git-sfdc-v2

# Step 6: Validate installation
echo ""
echo "Step 6: Validating installation..."
echo "Checking versions..."
git --version && git-lfs --version && git-sfdc --version

echo ""
echo "=== Setup Complete ==="
echo ""
echo "To verify everything is working, run:"
echo "  git --version && git-lfs --version && git-sfdc --version && brew info coreutils | head -1"
echo ""
echo "Note: If you see version mismatches or 'Command not found' errors,"
echo "you may need to add Homebrew to your PATH. Add this to your ~/.zshrc:"
echo "  export PATH=\"/opt/homebrew/bin:\$PATH\"  # For Apple Silicon"
echo "  # OR"
echo "  export PATH=\"/usr/local/bin:\$PATH\"     # For Intel Macs"
echo ""
echo "Then restart your terminal or run: source ~/.zshrc"

