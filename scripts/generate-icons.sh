#!/bin/bash
# Generate iOS app icons from icon.svg
# Requires: Inkscape, ImageMagick, or similar SVG-to-PNG converter
# Alternative: Use https://appicon.co or https://makeappicon.com with the SVG
#
# Usage: ./scripts/generate-icons.sh
#
# This script generates all required iOS app icon sizes.
# If you don't have CLI tools, upload public/icons/icon.svg to:
# - https://appicon.co (generates all iOS sizes)
# - https://makeappicon.com
# - Xcode's asset catalog (drag and drop 1024x1024 PNG)

set -e

ICON_SVG="public/icons/icon.svg"
OUTPUT_DIR="public/icons"
IOS_ASSET_DIR="ios/App/App/Assets.xcassets/AppIcon.appiconset"

SIZES=(
  "20:icon-20"
  "40:icon-20@2x"
  "60:icon-20@3x"
  "29:icon-29"
  "58:icon-29@2x"
  "87:icon-29@3x"
  "40:icon-40"
  "80:icon-40@2x"
  "120:icon-40@3x"
  "120:icon-60@2x"
  "180:icon-60@3x"
  "76:icon-76"
  "152:icon-76@2x"
  "167:icon-83.5@2x"
  "1024:icon-1024"
  "152:icon-152"
  "167:icon-167"
  "180:icon-180"
)

echo "Generating iOS app icons..."

for entry in "${SIZES[@]}"; do
  IFS=":" read -r size name <<< "$entry"

  if command -v magick &> /dev/null; then
    magick convert -background none -resize "${size}x${size}" "$ICON_SVG" "$OUTPUT_DIR/${name}.png"
    cp "$OUTPUT_DIR/${name}.png" "$IOS_ASSET_DIR/${name}.png" 2>/dev/null || true
  elif command -v convert &> /dev/null; then
    convert -background none -resize "${size}x${size}" "$ICON_SVG" "$OUTPUT_DIR/${name}.png"
    cp "$OUTPUT_DIR/${name}.png" "$IOS_ASSET_DIR/${name}.png" 2>/dev/null || true
  elif command -v rsvg-convert &> /dev/null; then
    rsvg-convert -w "$size" -h "$size" "$ICON_SVG" > "$OUTPUT_DIR/${name}.png"
    cp "$OUTPUT_DIR/${name}.png" "$IOS_ASSET_DIR/${name}.png" 2>/dev/null || true
  else
    echo "No SVG converter found. Install ImageMagick or librsvg."
    echo "Or upload $ICON_SVG to https://appicon.co"
    exit 1
  fi

  echo "  Generated ${name}.png (${size}x${size})"
done

echo ""
echo "Done! Icons generated in $OUTPUT_DIR and $IOS_ASSET_DIR"
echo ""
echo "Also needed for iPad:"
echo "  - Copy icon-20@2x.png as icon-20@2x-ipad.png"
echo "  - Copy icon-29@2x.png as icon-29@2x-ipad.png"
echo "  - Copy icon-40@2x.png as icon-40@2x-ipad.png"

# Copy iPad duplicates
cp "$IOS_ASSET_DIR/icon-20@2x.png" "$IOS_ASSET_DIR/icon-20@2x-ipad.png" 2>/dev/null || true
cp "$IOS_ASSET_DIR/icon-29@2x.png" "$IOS_ASSET_DIR/icon-29@2x-ipad.png" 2>/dev/null || true
cp "$IOS_ASSET_DIR/icon-40@2x.png" "$IOS_ASSET_DIR/icon-40@2x-ipad.png" 2>/dev/null || true

echo "iPad duplicates copied."
