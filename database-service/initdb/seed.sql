INSERT INTO users (name, email, password) VALUES
  ('John Doe', 'john.doe@example.com', 'password123'),
  ('Jane Smith', 'jane.smith@example.com', 'password456');

INSERT INTO products (name, price, description, image_url) VALUES
  ('iPhone 13', 999.99, 'The latest iPhone from Apple', 'https://example.com/iphone13.jpg'),
  ('Samsung Galaxy S21', 799.99, 'The latest Android phone from Samsung', 'https://example.com/galaxys21.jpg');

INSERT INTO orders (user_id, product_id, quantity, created_at) VALUES
  (1, 1, 2, NOW()),
  (2, 2, 1, NOW()),
  (1, 2, 3, NOW());
