ALTER TABLE completed_orders DROP FOREIGN KEY completed_orders_ibfk_2;
-- UNIQUE制約を削除
ALTER TABLE completed_orders
DROP CONSTRAINT tow_truck_id;

-- 念のため、外部キー制約が正しく設定されていることを確認
ALTER TABLE completed_orders
ADD CONSTRAINT mytable_ibfk_2
FOREIGN KEY (tow_truck_id) REFERENCES tow_trucks(id) ON DELETE CASCADE;

-- インデックスの追加（オプション）
CREATE INDEX idx_completed_orders_tow_truck ON completed_orders(tow_truck_id);
