# IEEE OMAN CTF 2025 Theme

A complete, professional CTFd theme designed for the IEEE Oman Section Capture The Flag competition. Features a beautiful dark design with IEEE branding and modern cybersecurity aesthetics.

## Features

- 🎨 **Professional Dark Theme**: Custom color scheme with maroon accents
- 🏢 **IEEE Branding**: Integrated IEEE Oman Section branding and colors
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔧 **Complete Template Set**: All CTFd pages styled and ready to use
- ⚡ **Performance Optimized**: Lightweight CSS and JavaScript
- ♿ **Accessible**: WCAG compliant design
- 🚀 **Easy Installation**: Drop-in theme replacement

## Screenshots

![Homepage](assets/img/preview.png)

## Installation

### Method 1: Direct Upload (Recommended)

1. Download or clone this repository
2. Compress the entire theme folder into a ZIP file
3. In your CTFd admin panel, go to **Admin Panel → Appearance → Themes**
4. Click **Upload Theme** and select your ZIP file
5. Activate the "IEEE OMAN CTF 2025" theme

### Method 2: Manual Installation

1. Copy the entire theme folder to your CTFd installation's `themes/` directory
2. Rename the folder to `ieee-ctf` (or your preferred theme name)
3. In CTFd admin panel, go to **Admin Panel → Appearance → Themes**
4. Select "IEEE OMAN CTF 2025" from the dropdown and save

## File Structure

```
ieee-ctf-theme/
├── assets/
│   ├── css/
│   │   └── ieee-ctf-theme.css
│   ├── js/
│   │   └── ieee-ctf-theme.js
│   └── img/
│       ├── ieee-logo.png
│       └── favicon.ico
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── challenges.html
│   ├── challenge.html
│   ├── scoreboard.html
│   ├── settings.html
│   ├── components/
│   │   ├── navbar.html
│   │   ├── notifications.html
│   │   └── errors.html
│   ├── errors/
│   │   ├── 404.html
│   │   ├── 403.html
│   │   └── 500.html
│   ├── teams/
│   │   ├── teams.html
│   │   ├── new_team.html
│   │   └── join_team.html
│   └── users/
│       └── users.html
├── theme.json
└── README.md
```

## Customization

### Colors

The theme uses CSS custom properties for easy color customization. Edit `assets/css/ieee-ctf-theme.css`:

```css
:root {
    --bg: #0b0b0d;           /* Background */
    --panel: #121216;        /* Cards/panels */
    --maroon: #7e0e1f;      /* Primary brand */
    --maroon-2: #a01628;    /* Secondary brand */
    --ink: #d6d7db;         /* Text color */
    --muted: #9aa0a6;       /* Muted text */
    --border: #2a2a30;      /* Borders */
    --success: #10b981;     /* Success color */
    --ieee-blue: #00629B;   /* IEEE blue */
}
```

### Logo

Replace `assets/img/ieee-logo.png` with your organization's logo. Recommended dimensions: 800x450px.

### Branding

1. Update the eyebrow text in `templates/index.html`
2. Modify the hero title and description
3. Customize the navbar brand text in `templates/base.html`

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Microsoft Edge 80+

## CTFd Compatibility

- CTFd 3.0.0+
- Supports both individual and team modes
- Compatible with all standard CTFd plugins

## Development

### Prerequisites

- CTFd installation for testing
- Basic knowledge of Jinja2 templating
- Understanding of CSS and JavaScript

### Local Development

1. Clone this repository into your CTFd `themes/` directory
2. Make your modifications
3. Reload CTFd to see changes
4. Test across different browsers and devices

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is released under the MIT License. See LICENSE file for details.

## Credits

- **Design**: IEEE Oman Section
- **Development**: Custom CTFd theme
- **Icons**: Font Awesome 6.5.0
- **Fonts**: Lato (Google Fonts)

## Support

For issues or questions about this theme:

1. Check the [CTFd documentation](https://docs.ctfd.io/)
2. Review the theme files for implementation details
3. Open an issue in the repository

## Changelog

### v1.0.0 (Current)
- Initial release
- Complete template coverage
- IEEE branding integration  
- Responsive design
- Dark theme implementation
- Professional cybersecurity aesthetic

---

Built with ❤️ by IEEE Oman Section for the cybersecurity community.