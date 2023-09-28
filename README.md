# master-ihm.github.io
Site Web du Master IHM

## Pour modifier les pages du site avec Git

* Installation jekyll
    ```bash
    $ sudo apt-get install ruby-full build-essential zlib1g-dev
    $ gem install jekyll bundler
    $ gem install jekyll-redirect-from
    ```
* Faire dans un terminal :

    ```bash
    $ git clone https://github.com/Master-IHM/master-ihm.github.io.git
    $ cd master-ihm.github.io
    ```

* Éditer le fichier souhaité dans le sous-dossier `_pages` (au format
  **Markdown**, voir [ce guide](https://guides.github.com/features/mastering-markdown/)
  ou [cet article détaillé](https://help.github.com/en/articles/basic-writing-and-formatting-syntax))

* Tester le site localement

    ```bash
    $ jekyll serve
    ```

* Commiter et pousser (par exemple en restant dans la branche *main*) :

  ```bash
	$ git commit -a -m "Change page XXX"
	$ git push
	```

## Pour ajouter une news directement 

`_posts`

## Pour ajouter un stage 

`_data`

 
