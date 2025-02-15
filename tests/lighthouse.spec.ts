import { chromium, test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test('Lighthouse Analysis', async () => {
    const browser = await chromium.launch({
        args: ['--remote-debugging-port=9222'],
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://automationexercise.com/');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportName = `lighthouse-report-${timestamp}`;
    await playAudit({
        page: page,
        port: 9222,
        thresholds: {
            performance: 10,
            accessibility: 50,
            seo: 50,
            'best-practices': 20,
            pwa: 50,    
        },
        reports: {
            formats: {
                html: true,
            },
            name: reportName,
            directory: '../playwright-report',
        },
    })
});