class SessionsController < ApplicationController

  def new
  end

  def create

    user = User.find_by(username: params[:user][:username])

    if user && user.authenticate(params[:user][:password])
      render json: user
    else
      p "*" * 50
      p "Failed to Sign In"
      p "*" * 50
      render json: "FAILED"
    end

  end

  def destroy
  end

end
