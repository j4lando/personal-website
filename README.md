# Josh Lando - Personal Website

A modern, responsive personal website built with Next.js, featuring snap-scroll navigation, image galleries, and YAML-based content management.

## Features

- **Snap Scroll Navigation**: Smooth vertical scrolling between sections
- **Interactive Image Galleries**: Auto-rotating images with manual controls
- **YAML Configuration**: Easy content management through YAML files
- **Responsive Design**: Works on all screen sizes
- **Modern Animations**: Clean, professional transitions throughout

## Sections

- **Home**: Hero section with background image and social links
- **About**: Personal introduction with photo and contact button
- **Projects**: Swipeable project showcase with detailed descriptions
- **Outdoors**: Adventure gallery with dates and image titles

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-website.git

# Navigate to the project directory
cd personal-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Content Management

Content is managed through YAML files in `src/data/`:

- `projects.yaml` - Project information and images
- `outdoors.yaml` - Outdoor activities and adventures

To add new content:

1. Edit the appropriate YAML file
2. Add new items to the `items` array
3. Include required fields: `id`, `title`, `description`, `images`, `imageTitles`, `icon`, `dates`
4. Save and the changes will be reflected immediately

## Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

2. Push to main branch and GitHub Actions will automatically deploy

### Method 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions" (if using Method 1) or "Deploy from a branch" (if using Method 2)
4. Select the `gh-pages` branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Project Structure

```
src/
├── app/
│   ├── _components/
│   │   ├── NavBar.tsx          # Navigation component
│   │   └── SwipeableSection.tsx # Reusable gallery component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── data/
│   ├── projects.yaml           # Projects configuration
│   ├── outdoors.yaml           # Outdoors configuration
│   └── README.md               # Configuration guide
├── lib/
│   └── configLoader.ts         # YAML loading utility
public/
└── images/                     # Image assets
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **js-yaml** - YAML parsing
- **React** - UI library

## License

This project is open source and available under the [MIT License](LICENSE).