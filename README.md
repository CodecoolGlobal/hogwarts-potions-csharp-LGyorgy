# Hogwarts Potions

The Hogwarts Potions project is a combination of a backend API server and a frontend React application server, to run a web application to create fantasy potions and recipes.

The backend API is implemented in ASP.NET framework, and it's purpose is to give endpoints to manage a database for fictional Hogwarts students, potions, recipes and ingredients.

To complement this API, there's a separate node.js server, which runs a React SPA, utilizing the API endpoints to present the resources to the user, more specifically to conduct the brewing of potions.

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