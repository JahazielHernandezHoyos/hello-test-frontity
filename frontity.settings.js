const settings = {
  "name": "hello-test-frontity",
  "state": {
    "frontity": {
      "url": "https://www.liftpartsfl.com/",
      "title": "Rox mamaverga mira",
      "description": "WordPress installation for Frontity tidi izi el development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Use equiped o algo asi no te entiendo es oxd ",
              "/product-category/used-material-handlings-equipments/"
            ],
            [
              "Brakes",
              "/product-category/brakes/"
            ],
            [
              "Cooling",
              "/product-category/cooling/"
            ],
            [
              "electrical",
              "/product-category/electrical/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.liftpartsfl.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
