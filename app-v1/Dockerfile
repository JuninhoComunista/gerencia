# Use a imagem base Node.js
FROM node:latest

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app-v1

# Copie os arquivos necessários para o contêiner
COPY * ./

# Instale as dependências, se houver
RUN npm install

# Exponha a porta que a aplicação está utilizando
EXPOSE 9080

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["node", "app-v1.js"]
