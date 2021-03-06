class Image < ApplicationRecord
  mount_uploaders :urls, ImageUploaderUploader

  # Association
  belongs_to :powder_room

  # Validation
  validates :urls, presence: true
end
