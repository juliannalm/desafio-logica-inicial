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


# Receber nome e experiência do herói
nome_heroi = input("Digite o nome do herói: ")
experiencia = int(input("Digite a quantidade de experiência do herói: "))

# Utilizar estrutura de decisão para determinar o nível
if experiencia < 1000:
    nivel = "Ferro"
elif 1001 <= experiencia <= 2000:
    nivel = "Bronze"
elif 2001 <= experiencia <= 5000:
    nivel = "Prata"
elif 5001 <= experiencia <= 7000:
    nivel = "Ouro"
elif 7001 <= experiencia <= 8000:
    nivel = "Platina"
elif 8001 <= experiencia <= 9000:
    nivel = "Ascendente"
elif 9001 <= experiencia <= 10000:
    nivel = "Imortal"
else:
    nivel = "Radiante"

# Exibir a mensagem de saída
mensagem_saida = f"O Herói de nome {nome_heroi} está no nível de {nivel}"
print(mensagem_saida)

