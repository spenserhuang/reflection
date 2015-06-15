class UsersController < ApplicationController

  def new
  end

  def create

    user = User.new(user_params)

    if user.save
      render json: user
    else
      p "*" * 50
      p "Failed to Save User"
      p "*" * 50
    end

  end

  def edit
  end

  def show
  end

  def update
    p "*" * 50
    p params
    p "*" * 50

    user = User.find(params[:id])
    user.updateAttributes(params[:input])

  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :username, :password, :password_confirmation)
  end

end
