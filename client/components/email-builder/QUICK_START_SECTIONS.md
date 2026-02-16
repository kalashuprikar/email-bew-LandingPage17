# Quick Start: Dragging Blocks into Sections

## What Changed

Your email template builder now automatically uses a **section-based layout**. Every new template comes with a "Main Section" ready to accept blocks.

## How to Use

### 1. Open Your Email Template
- Navigate to the Templates page
- Create a new template or edit an existing one
- The editor opens with a default "Main Section" already created

### 2. Drag Blocks into the Section

**From the Blocks Panel (Left Side):**

1. Look at the left sidebar where you see all the block types (Title, Text, Image, Button, etc.)
2. **Click and hold** on any block (e.g., "Title")
3. **Drag** it over the "Main Section" on the canvas
4. You'll see an **orange highlight** showing where the block will be placed
5. **Release the mouse** to drop the block
6. The block appears in the section at that position

### 3. Add More Blocks

Repeat the dragging process to add multiple blocks:

```
Blocks Panel          |  Email Canvas
                      |
Title                 |  ┌─────────────────────┐
Text       ──────────▶│  │ Main Section        │
Image                 │  │                     │
Button                │  │  📄 Title Block     │
...                   │  │  📝 Text Block      │
                      │  │                     │
                      │  └─────────────────────┘
```

### 4. Position Blocks Precisely

- **Between blocks**: Drop zones appear as thin lines between blocks
- **At the end**: Drop the block after the last block in the section
- **Empty section**: Drop the block in an empty section

### 5. Create Additional Sections

1. Scroll down in the Email Canvas
2. Click **"+ Add Section"** button
3. A new section is created
4. Drag blocks into the new section just like the first one

### 6. Organize Blocks

- **Reorder blocks**: Click and drag blocks within a section to reorder them
- **Delete blocks**: Select a block and click the trash icon that appears below it
- **Copy blocks**: Select a block and click the copy icon to duplicate it

## Visual Indicators

| Element | Meaning |
|---------|---------|
| 🟠 Orange ring around drop zone | Block will be placed here |
| 🟠 Orange highlight | Section/zone is active and ready to accept blocks |
| ⬜ Dashed border in empty section | Drop a block here to start |
| ✋ Grip handle (⋮⋮) | Click to reorder blocks |
| 📋 Copy icon | Duplicate the block |
| 🗑️ Trash icon | Delete the block |

## Keyboard Shortcuts

- **Drag**: Click and hold on a block, move mouse, release to drop
- **Select**: Click on a block in the canvas to select it
- **Edit**: Click on text in a block to edit it directly

## Troubleshooting

### Block Not Appearing After Drop?

**Check:**
1. ✅ Mouse is fully over the section (orange highlight shows)
2. ✅ Release the mouse completely
3. ✅ Wait 1 second for the section to re-render
4. ✅ Check the browser console (F12) for any errors

### Can't See the Drop Zone?

**Solution:**
- Make sure you're dragging from the blocks panel on the left
- The drop zone should show an orange ring when hovering
- If you don't see it, try refreshing the page

### Block Appears in Wrong Section?

**Solution:**
- This might be because you dragged it over multiple sections
- Delete the block and try again
- Drag more slowly and carefully over the target section

## Example Workflow

```
1. Create new template
   ├─ Template opens with "Main Section"
   
2. Add blocks to Main Section
   ├─ Drag "Title" block → Drop in Main Section
   ├─ Drag "Text" block → Drop below Title
   ├─ Drag "Image" block → Drop below Text
   ├─ Drag "Button" block → Drop at the end
   
3. Create a second section
   ├─ Click "+ Add Section"
   ├─ Name it "Footer Section"
   
4. Add blocks to Footer Section
   ├─ Drag "Divider" → Drop in Footer Section
   ├─ Drag "Social" icons → Drop below Divider
   ├─ Drag "Text" → Drop below Social (for footer text)
   
5. Save your template
   ├─ Click "Save & exit"
   ├─ Template is now saved with sections
```

## Tips & Tricks

✨ **Pro Tips:**

1. **Right-to-Left Dragging**: You can keep the blocks panel open while dragging
2. **Bulk Add**: You can drag multiple blocks in sequence without waiting
3. **Section Organization**: Group related blocks in sections for cleaner design
4. **Copy & Paste**: Use the copy icon to quickly duplicate block patterns
5. **Templates**: Use section templates from the "Sections" tab for pre-designed layouts

## Next Steps

- Learn about [Section Settings](./SECTION_IMPLEMENTATION_GUIDE.md#section-operations)
- Explore [Advanced Features](./SECTION_IMPLEMENTATION_GUIDE.md#future-enhancements)
- Check the [Full Implementation Guide](./SECTION_IMPLEMENTATION_GUIDE.md)

---

**Need Help?**
- Check the browser console (F12) for error messages
- Refresh the page if something seems stuck
- Try dragging a simple "Title" block first to test
