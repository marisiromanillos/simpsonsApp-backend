module.exports = {
  addUser: (email, password) => {
    return `INSERT INTO users
        (email, password)
        VALUES
        ("${email}", "${password}")`;
  },
  deleteCharacter: (id, userId) => {
    return `DELETE FROM characters 
                  WHERE id = ${id} AND user_id = ${userId}`;
  },
  addCharacter: (character, quote, characterDirection, userId) => {
    return `INSERT INTO characters
            (name, quote, direction, user_id)
            VALUES
            ("${character}", 
            "${quote}", 
            "${characterDirection}", 
            "${userId}")`;
  },
  getById: (id) => {
    return `SELECT name, quote, 
            direction, image
                    FROM characters
                         WHERE user_id = '${id}'`;
  },
  updateCharacter: (key, value, id, userId) => {
    return `UPDATE characters SET ${key} = "${value}"
    WHERE id = ${id} AND user_id = ${userId}`;
  },
  checkUsersCreds: (email, sha256Password) => {
    return `SELECT id FROM users
                  WHERE email = "${email}"
                          AND password = "${sha256Password}"`;
  },
  addToken: (userId, token) => {
    return `INSERT INTO tokens
                (user_id, token)
                    VALUES
                     ("${userId}","${token}")`;
  },
  getIdByToken: (token) => {
    return `SELECT user_id FROM tokens
                WHERE token = "${token}"`;
  },
};
