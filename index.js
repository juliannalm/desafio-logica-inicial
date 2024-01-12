# Dicionários contendo informações sobre Pokémon
pokemon1 = {
    'nome': 'Pikachu',
    'tipo': 'Elétrico',
    'nivel': 25,
    'ataque': 'Investida Trovão',
    'defesa': 20
}

pokemon2 = {
    'nome': 'Bulbasaur',
    'tipo': 'Planta/Veneno',
    'nivel': 20,
    'ataque': 'Chicote de Vinha',
    'defesa': 18
}

pokemon3 = {
    'nome': 'Charmander',
    'tipo': 'Fogo',
    'nivel': 18,
    'ataque': 'Brasa',
    'defesa': 15
}

# Lista de Pokémon
pokemons = [pokemon1, pokemon2, pokemon3]

# Iterar sobre os Pokémon, exibir mensagens de cadastro
for pokemon in pokemons:
    mensagem = f"{pokemon['nome']} cadastrado com sucesso!"
    print(mensagem)
