module.exports = {
  addUser: (email, password) => {
    // Consider using parameterized queries to prevent SQL injection
    return `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;
  },
  deleteCharacter: (id, userId) => {
    // SQL query for deleting a character by ID and user ID
    return `DELETE FROM characters WHERE id = ${id} AND user_id = ${userId}`;
  },
  addCharacter: (character, quote, characterDirection, userId) => {
    // SQL query for adding a character
    return `INSERT INTO characters (name, quote, direction, user_id)
            VALUES ('${character}', '${quote}', '${characterDirection}', '${userId}')`;
  },
  getById: (order) => {
    // SQL query for getting characters by user ID with an order parameter
    return `SELECT name, quote, direction, image
            FROM characters
            WHERE user_id = ?
            ORDER BY name ${order}`; // Corrected the order by clause
  },
  updateCharacter: (key, value, id, userId) => {
    // SQL query for updating a character's attribute by ID and user ID
    return `UPDATE characters SET ${key} = '${value}' WHERE id = ${id} AND user_id = ${userId}`;
  },
  checkUsersCreds: () => {
    // SQL query for checking user credentials
    return `SELECT id FROM users WHERE email = ? AND password = ?`;
  },
  addToken: (userId, token, browserTempToken, emailTempToken) => {
    // SQL query for adding a token for a user
    return `INSERT INTO tokens 
                  (user_id, token, browser_temp_token, email_temp_token)
                   VALUES ('${userId}', '${token}', '${browserTempToken}', '${emailTempToken}')`;
  },
  getTokenByBrowserEmail: (browserTempToken, emailTempToken) => {
    return `SELECT token 
           FROM tokens
                  WHERE browser_temp_token = "${browserTempToken}"
                        AND emailTempToken = "${emailTempToken}"`;
  },
  getIdByToken: (token) => {
    // SQL query for getting user ID by token
    return `SELECT user_id FROM tokens WHERE token = '${token}'`;
  },
};
