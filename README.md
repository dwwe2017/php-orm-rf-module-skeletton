# tsi2-module-skeletton
The framework for the development of an extension module for the Tea(m)speak Interface 2 Framework

#### Use of React and JSX in the frontend
Since the JSX files are not needed in productive mode, but only the compiled scripts are accessed, we need an image of the view folder. For this we create a subfolder named "fronted" in the directory "src" which will serve as source for the respective JSX action scripts. Now take the same subfolder structure for the directory "fronted" as it also exists in the folder "views". Assuming we want to create a ViewAction "index" for the IndexController, the folder structure would look like this:

```
└ src/
  ...
  ├ fronted/
  │ └ IndexController/
  │   └ ..
  ...
  ├ views
  │ └ IndexController/
  │   └ ..
  │
  └ extension.json
```
