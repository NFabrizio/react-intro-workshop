# Tech Summit 2019 - Introduction to React  

## Environment Set Up  
1. Install Git.  
    Read the instructions for your OS
    [by clicking this link](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git).  
    **Note: If you want to configure Git after following the set up instructions
    at the link above, then click the "Next" link at the bottom of the page.
    Configuring Git is not required for this workshop. We will only need the basic
    setup.**  
2. Install Node.  
    You’ll need to have Node 8.16.0 or Node 10.16.0 or a later version on your
    local development machine.  
    Read the instructions for your OS
    [by clicking this link](https://nodejs.org/en/download/package-manager/) and
    selecting your OS from the list.  
3. Check Node version.
    Once you have Node installed on your machine, check the Node version by
    typing the following command on the command line in a terminal:  
    `node --version`  
    If the version displayed is not 8.16.0, 10.16.0 or later, please install nvm
    and ensure that you can switch to one of these versions of Node by completing
    the installation instructions for nvm below.  
4. Optional: Install nvm.  
    You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions
    between different projects.  
    Installation instructions for nvm can be found
    [by clicking this link](https://github.com/nvm-sh/nvm).  
    Installation instructions for nvm-windows can be found
    [by clicking this link](https://github.com/coreybutler/nvm-windows).  
    After installation is complete, run the following commands on your machine in
    a terminal:  
    `nvm install 8.16.0`  
    `nvm use 8.16.0`  
    `node --version`  
    After following the steps above with nvm, you should see `v8.16.0` printed
    out in your terminal.  
    **Note: This step is optional. If you have Node 8.16.0 or Node 10.16.0
    installed, nvm is not required. It is only necessary if you need a different
    Node version installed on your machine for other projects.**  
5. Install create-react-app.  
    On your machine in a terminal, run the following command:  
    `npm install -g create-react-app`  
6. Create a base React application  
    On your machine in a terminal, run the following command:  
    `create-react-app my-tech-summit-2019-app`  
7. Test the base React application  
    On your machine in a terminal, change into the my-tech-summit-2019-app
    directory created in the previous step, and run the following command:  
    `npm start`  
    The application should start and automatically open in a browser window.  
8.  Clone the workshop repo to your local machine.  
    On your machine in a terminal, run the following command:  
    `git clone https://github.com/NFabrizio/react-intro-workshop.git`  
