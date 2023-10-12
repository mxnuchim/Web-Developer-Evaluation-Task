# Web-Based Video Player

This project is a simple web-based video player that uses HLS to stream video content to a browser. It was created as part of the Moment Web Developer Evaluation Task (v2 Apr 2023).

## Video Content

Unfortunately, the initial video URL located [Here](https://d3ukqbhrqb4xnt.cloudfront.net/share_videos/6e95f9a732a74664a4982adf4b808500/e8ffab99-e494-495d-8b21-787e95f9672d/211115200114.m3u8) seemed to be empty and did not return any data. So I have used a different random URL of the same format to complete this task to the best of my ability

The video content used for this player is located at the following URL:
[Video URL](https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8)

## Features

- **Custom Controls**: This video player uses custom HTML and JavaScript controls rather than native player controls.

- **Progress Bar**: The user can scrub back and forth through the video using the progress bar.

- **Skip Forward / Backward**: The player allows the user to skip forward and backward by 10 seconds.

- **Adaptive Quality**: The playback quality adapts based on the internet speed and device capability, with options for 1080p, 720p, and 360p.

- **Cached Segments**: If the player starts with low bandwidth and has cached low-resolution segments, when the video is replayed or skipped back, higher-resolution versions will replace the cached ones if the bandwidth has improved.

## Libraries Used

This project uses the following libraries:

- **React**: The project is built using the React.js library, allowing for the creation of modular and reusable components.

- **TailwindCSS**: TailwindCSS is utilized in this project for simplifying and maintaining consistent styles and responsive design across UI elements.

- **React Player**: The React Player library is used to embed the video player in the application.

- **React Icons**: The React Icons library provides icon components for player controls.

## Usage

To run this project, you should follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## Author

This project was created by Manuchimso E. Oliver.

## License

This project is open-source and available under the MIT License.
