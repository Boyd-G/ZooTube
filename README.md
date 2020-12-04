# ZooTube
This is our final group project utilizing JavaScript technologies based on a react app that is connected to a local API server using expressJS.

# Mission Statement 
Zoos around the country and around the world provide an important service by conducting research, rescuing and rehabilitating animals, overseeing animal population management, and providing education and entertainment to millions of people each year.  During the current global pandemic, zoos have seen a sharp decline in attendance.  Due to this there are less available resources to help home, rehabilitate, and care for these animals. 

Our goal is to provide a way for people to engage, and donate, to these animals and organizations that we all love, from the safety of their own homes. 


## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.
The server contains information on animal types, organization types, links to different streams, and donation links. 

## Client
The client build process utilizezs React, NodeJS, and bootstrap to create a smooth user interface to watch animal streams, learn, and donate to various animal based institutions.

The client configuration will also build the Sass files found at `/src/client/scss`. The `index.tsx` imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.
