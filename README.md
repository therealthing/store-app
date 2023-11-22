This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Intro

This sample store app covers:
 - nested navigation using React Navigation (TabNavigator + StackNavigator)
 - styled components
 - React Query with pagination
 - product listing using FlatList
 - user authentication (the working credentials are pre-populated). The token retrieved is displayed in the console.
 - product search (quering the backend)
 - single product view (dedicated route with parameters)
 - add new product form
 - image caching using React Native Fast Image


# Screenshots 

![Image Alt text](/readme-media/preventing-previous-page.png "Product list paginated"))

![Image Alt text](/readme-media/add-product-form.png "Add Product"))

![Image Alt text](/readme-media/add-product-filled.png "Add Product filled"))

![Image Alt text](/readme-media/add-product-server-confirmation.png "Server response"))

![Image Alt text](/readme-media/guest-mode.png "Guest mode"))

![Image Alt text](/readme-media/product-details-2.png "Product details"))

![Image Alt text](/readme-media/search-default.png "Search"))

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using Yarn
yarn android
```

### For iOS

```bash
# using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You're successfully running Store App built with React Native. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.