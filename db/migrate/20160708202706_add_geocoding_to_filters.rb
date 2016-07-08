class AddGeocodingToFilters < ActiveRecord::Migration
  def change
    add_column :filters, :postal_code, :string
    add_column :filters, :latitude, :float
    add_column :filters, :longitude, :float
    add_index :filters, [:latitude, :longitude]
  end
end
