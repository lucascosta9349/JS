/*
Exatamente! 😄 Vou explicar direitinho para não restar dúvida.

Em JavaScript, uma **expressão regular (regex)** é escrita entre **slashes `/ /`**:

```javascript
const regex = /padrão/
```

---

# 📌 Como funciona

1️⃣ **As barras `/ /`** definem **o início e o fim da regex**.
Tudo que estiver entre elas é interpretado como **padrão de busca**.

2️⃣ Depois você pode usar métodos como:

```javascript
regex.test(string)    // retorna true ou false
string.match(regex)   // retorna o que bateu ou null
```

---

# 📦 Exemplo simples

```javascript
const regex = /\d/   // \d significa "qualquer dígito"
console.log(regex.test("123"))  // true
console.log(regex.test("abc"))  // false
```

Aqui:

* `/` → começo da regex
* `\d` → padrão que você quer procurar (número)
* `/` → fim da regex

---

# 📝 Observações importantes

* Se você escrever assim:

```javascript
\d
```

Isso **não funciona**, porque o JavaScript **não sabe que é regex**.
As barras `/ /` são obrigatórias para criar a regex literal.

* Você também pode adicionar **flags** depois da barra final:

```javascript
/\d/g    // g → global (procura todas as ocorrências)
```

---

Então resumindo:

```text
/ ... /   → define o padrão regex
// ...     → comentário do JavaScript (não é regex)
```

Um exemplo completo:

```javascript
// regex para verificar se existe um número
const temNumero = /\d/;

console.log(temNumero.test("abc1")); // true
console.log(temNumero.test("abc"));  // false
```
*/