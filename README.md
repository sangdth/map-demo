This is a [Next.js](https://nextjs.org/) project bootstrapped with [`nextjs-template`](https://github.com/sangdth/nextjs-template) created by Sang Dang.

## Getting Started

Demo here: [https://map-demo-app.vercel.app/](https://map-demo-app.vercel.app/)

Features:

- Use Mapbox SDK.
- Random 10,000 markers generated.
    - But only markers with coordinates inside current viewmap are rendered.
    - This means that the zoom out will be significantly slower. Be careful.
    - We can by pass this issue by implementing the cluster marker.
- TypeScript support.
- All components are agnostically built. Means it's not attached to current data.
