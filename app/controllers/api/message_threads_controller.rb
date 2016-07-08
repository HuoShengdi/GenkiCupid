class Api::MessageThreadsController < ApplicationController

  def index
   @user = current_user
   @message_threads = @user.message_threads
  end

  def create
    sender_id = current_user.id
    recipient_id = User.find_by_username(params[:username]).id
    if MessageThread.between(sender_id,recipient_id).present?
      @message_thread = MessageThread.between(sender_id,
        recipient_id).first
    else
      @message_thread = MessageThread.create!(sender_id: sender_id, recipient_id: recipient_id)
    end
    render :show
  end

  def show
    @user = current_user
    @message_thread = MessageThread.find(params[:id])
  end

  private
  def message_thread_params
    params.permit(:sender_id, :recipient_id)
  end

end
