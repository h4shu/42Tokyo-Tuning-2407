-- このファイルに記述されたSQLコマンドが、マイグレーション時に実行されます。
CREATE INDEX idx_areas1 ON areas (id);
CREATE INDEX idx_users1 ON users (id);
CREATE INDEX idx_sessions1 ON sessions (session_token);
CREATE INDEX idx_tow_trucks1 ON tow_trucks (driver_id, id);
CREATE INDEX idx_nodes1 ON nodes (id);
CREATE INDEX idx_edges1 ON edges (id);
CREATE INDEX idx_edges2 ON edges (node_a_id, area_id);
CREATE INDEX idx_edges3 ON edges (node_a_id, node_b_id);
CREATE INDEX idx_locations1 ON locations (tow_truck_id);
CREATE INDEX idx_orders1 ON orders (id);
CREATE INDEX idx_orders2 ON orders (node_id, status);
CREATE INDEX idx_completed_orders1 ON completed_orders (order_id);
