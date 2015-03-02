# just handles parsing 1 pokemon's json


json.extract!(
  pokemon,
  :id,
  :attack,
  :defense,
  :image_url,
  :moves,
  :name,
  :poke_type
)
