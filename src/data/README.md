# Configuration Files

This directory contains YAML configuration files for the SwipeableSection components.

## Files

- `projects.yaml` - Configuration for the Projects section
- `outdoors.yaml` - Configuration for the Outdoors section

## Configuration Structure

Each YAML file should follow this structure:

```yaml
title: "Section Title"
backgroundColor: "rgba(r,g,b,a)"
textColor: "white"
items:
  - id: "unique-id"
    title: "Item Title"
    description: "Item description text"
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"]
    icon: ""  # Leave empty for no icon
    dates: "Single Date"  # or ["Date 1", "Date 2"] or null
```

## Adding New Items

To add a new project or outdoor activity:

1. Open the appropriate YAML file (`projects.yaml` or `outdoors.yaml`)
2. Add a new item to the `items` array
3. Fill in all required fields:
   - `id`: Unique identifier
   - `title`: Display name
   - `description`: Detailed description
   - `images`: Array of image paths
   - `icon`: Leave empty string for no icon
   - `dates`: Single date string, array of dates, or null

## Date Formats

- **Single date**: `"August 2024"`
- **Multiple dates**: `["July 2023", "September 2024"]`
- **No dates**: `null` or omit the field

## Colors

Use RGBA format for colors:
- `backgroundColor`: Background color for the section
- `textColor`: Text color (usually "white" for dark backgrounds)

The changes will be automatically reflected in the website when you save the files.
