class User < ActiveRecord::Base

  has_many :reflections

  has_secure_password

end
