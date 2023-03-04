# POKEMON LEAGUE MAKER

This project uses the [pokéAPI](https://pokeapi.co/).
You can find the backend [here](https://github.com/NicolaiGorden/phase-3-sinatra-react-project/commits/main)

## Pokémon Maker

### Making New Pokémon

On the Pokémon Maker UI, you should see the template for a Pokémon (default is Bulbasaur). You can fill out your own nickname, select a species, ability, and moves. Once you've finished, hit 'save to box'.

### Editing Pokémon

You can see the Pokémon you created in the box menu. Hit 'delete' to permanently delete the Pokémon, or 'edit' to populate the editor with that specific Pokémon's information. Click 'save edits' once you're satisfied with your edits.
FYI: box sprites for generation 9 Pokémon are not accessable through pokéAPI at the time of writing this, so images will be blank for them.

## League Maker

To create a new league, hit "add new league" This will populate the UI with a full league of trainers. To edit their teams, simply click a slot on their team, and the box will drop down. Once you click on a Pokémon in the box, it will be added to the team. A single Pokémon cannot be on the same team more than once, but can show up in the same League multiple times!

# Roadmap
* make box tab and league mode buttons look nicer
* add a 'name league' form to the 'add new league' screen
* give league edit button functionality
* make it so that you can change trainer profile picture
* ev, iv, item functionality
* add gen 9 pokemon sprites