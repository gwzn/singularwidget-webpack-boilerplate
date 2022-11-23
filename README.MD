# Singular Widget Development (Node+Webpack+VSCode) Boilerplate Project

This repository is an **unofficial** boilerplate project for building [Singular.live](https://www.singular.live) widgets using Node.js and Webpack. For more information and official documentation on building widgets in Singular, see: https://developer.singular.live/widget-sdk/widget-sdk/

```bash
git clone https://github.com/gwzn/singularwidget-webpack-boilerplate.git

npm install
```

# Notes

- **IMPORTANT:** Be sure to update your "Deploy Key" in the ```deploykey.json``` file or you will not be able to publish to Singular. You can generate the "Deploy Key" needed for your widget on your account's "Widget Manager" page. https://app.singular.live/widgets/editor

- **ALSO IMPORTANT:** Since the Singular Widget requires the files to be published to reside in a directory named ```source/```, we are using a setup where the editable source files live in a folder called ```dev/``` and are then bundled into the ```source/``` folder. This may be confusing because most webpack projects have development files in "src/" and compile to "dist/"

- The ```output.html``` file in the ```dev/``` folder is used as a *template* file for the bundled output, so it can be edited with HTML modifications and it will have the script and style information automatically inserted.

- The ```UIDef.json``` file is a place to write the JSON that is used in the Singular Widget Manager's UI Definition field. Currently, there is no way to update this other than pasting JSON into the webform on the Widget Manager page. This file is not parsed by the build/publish system in any way, but exists to store widget UI configuration alongside the widget development files.

- Note the build task for VSCode is defined in the .vscode directory is an **alias** for the ```'publish'``` task defined in the NPM ```package.json``` file.

- Since this is a boilerplate repository for a new widget it is probably desirable to create a new repository using Github's "Use this template" or disconnect from  ```origin``` before making any commits:  ```git remote rm origin```

\
This project is in very early development currently and should be considered to be in 'alpha' stage of development. Please feel free to provide feedback via [Github Issues](https://github.com/gwzn/singularwidget-webpack-boilerplate/issues).

\
\
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
