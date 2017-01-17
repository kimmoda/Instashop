@posts.each do |post|
  json.set! post.id do
   json.image_url post.image_url
   json.item_url post.item_url
   json.price post.price
   json.user_id post.user_id
   json.caption post.caption
   json.user_image_url post.user.image_url
 end
end
