# Hogwarts Potions

The Hogwarts Potions project is a combination of a backend API server and a frontend React application server, to run a web application to create fantasy potions and recipes.

The backend API is implemented in ASP.NET framework, and it's purpose is to give endpoints to manage a database for fictional Hogwarts students, potions, recipes and ingredients.

To complement this API, there's a separate node.js server, which runs a React SPA, utilizing the API endpoints to present the resources to the user, more specifically to conduct the brewing of potions.

## Built With

![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![.Net](https://img.shields.io/badge/ASP.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)


## Installation

You will need to have .NET installed on your system to be able to run this application. If you need help with installing .NET, see [Install .NET Core](https://learn.microsoft.com/en-us/dotnet/core/install/windows).

Clone the repository using git:
```bash
git clone git@github.com:CodecoolGlobal/hogwarts-potions-csharp-LGyorgy.git
```
To run the backend server:

```bash
dotnet run
```

To run the frontend server first you need to navigate to its folder:

```bash
cd .\HogwartsPotions-Frontend\
```

Before the first run, you will also need to install its dependecies:

```bash
npm install
```

After the installation is complete, you can run the frontend server with the following command:

```bash
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)