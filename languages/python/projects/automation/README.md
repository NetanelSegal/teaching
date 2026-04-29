# Automation Track: Productivity at Scale

Master the art of making the computer do the boring stuff. This track focuses on web scraping, file management, and workflow automation.

## Prerequisites
- **OS & Pathlib:** Navigating the file system and manipulating paths.
- **String Manipulation:** RegEx and advanced string methods for data extraction.
- **HTML/CSS Basics:** Understanding selectors for web scraping.
- **Error Handling:** Robust `try/catch` blocks for unpredictable web/OS environments.

## Core Libraries
- `beautifulsoup4`: For parsing HTML and XML.
- `selenium` / `playwright`: For automating browser interactions (clicking, scrolling).
- `schedule`: For running tasks at specific times.
- `requests`: The standard for making HTTP requests.

## Projects Roadmap

### Project 1: "The Organizer" (OS Automation)
A script that watches a folder (like Downloads) and automatically moves files into subfolders based on their extension (Images, Docs, Scripts).
- **Focus:** `os` and `shutil` modules, file system events.

### Project 2: Price Drop Tracker (Web Scraping)
Scrape an e-commerce site for a specific product and send an email/notification when the price drops below a certain threshold.
- **Focus:** `BeautifulSoup`, HTTP headers, and sending emails with `smtplib`.

### Project 3: Automated Social Media / Job Scraper (Browser Automation)
Use Selenium to log into a site, perform a search, and export results (like job postings) into an Excel file.
- **Focus:** Handling dynamic content, waits, form submission, and data export.
