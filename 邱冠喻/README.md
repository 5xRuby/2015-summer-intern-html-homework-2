Simple Rails and jQuery Homework
==========

I ... implement `jquery` homework in a rails project, to run this thing

```
cd <this_project>
git submodule init
git submodule update --recursive
```

And init the rails project

```
cd <this_folder>/homework
bundle
rake db:migrate
```

Then it **should** be able to run

```
rails s
```

Open the browser, there is an index page in this project with some link above the page, click the `jquery_homework` and this is my jquery homework.  

The jQuery conatins `ajax` and `selector` practise:  

 1. At `document.ready`, there is an ajax sent to `https://api.github.com/users/chgu82837/events` to fetch my recent public events
 2. The result is rendered as bootstrap panels
 3. You can use the `select` to select type of event as targets and `radio button` to set what state wants to set to the targets
 4. Press `Go` to see the result

The result is very different from the original assignment ... I know XDD.  

