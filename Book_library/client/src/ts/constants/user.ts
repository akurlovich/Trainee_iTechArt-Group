const ADMIN_ROLE = 'moderator';
const BOOKING_TIME_MILLISECONDS = 86400000;
const DEFAULT_COMMENT = 'Removed by moderator';
const BOOKS_BG_COLORS = ['#405F71', '#563E70', '#733F55', '#121d80'];
const USER_AVATAR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfYAAAH2CAMAAAC1NV6OAAAAA3NCSVQICAjb4U/gAAAAJ1BMVEVHcEzf6+/c5u3c5uzd5u3c5+zc5+zc5uyHpLXK2OCYscC2ydSnvcppE/zPAAAAB3RSTlMAHXDpxp5Es9jdjwAAFZdJREFUeJztneuaq7iuRVfuHZL3f97GEIpAuNhGkqdgjl/n7L2/7ipGSZoyrtS/f4Tsn3vHuaH7/06lvy4iTKv4er1eHivU/5tb86PAHwK3nGrbt+t1TfUMl/ADcL+X/iZIPI3vTN1T+ln84JwEhQ8I8kt/c2QCLeFfXFj4SNQ1vh7XpGDdI3DSL/JfLleqL8j5Zlbkv1B9Ce4FqnxMPew56+2oO3tp439cbix6CxDKfAiLXpt7yWm+xJXmtYB13kLzCoA7b6F5UU4enLfczqUf1l44o2W4ZZjtBbjj7GrxXNjst3A6u2nuY1jyubgs9B6WfA7OJvokLPk0HHf3IVeKj8Z5dx/CXh/HfQfdfQDFr7OHkf7LjeKX2MtI/4XiZ9mv9ADFT7Jv6QGK/2H/0gMUP+B+COkBiv9jdyvbElznWk57OpyJ4cJX8v/+HU164HL0I9tjJLlfDn1Wf5wk98ths93hhvqQg474o/b3ngN2+iP3956DdfqD9/eeQ2V69vee61EK/nSkQ7l1DhLtWOpjDhDtWOpT7L3gWerT7LrgWeqz7HjCs9SX2Gmk566+wi53eB7LrbO/Q7tz6Ufqgp0VPLNcLHtKdmzw8eyn0TPLpbCTRs8Gn8oeGj0bfDr+Gz0TfA7Oj254RJOJ6wHPsZ6P3wHPsb4FrwOeY30bPgc8x/pWHA54hjkB3HlnmJPBV7A7McwJcSutMgFGeDn8eOflKUm8BHoubrL48E7r0ngI9Fzc5MH3TusaoHundR2gvfNoTg/cgxsezWmC6p3WdcH0TuvaIHqndX3wvNO6BWjead0GMO/c3IyA2t8dWX8+n68h9X9S+ouKB+ncxoX12nZV/TdHVb1fLvTjeIe3/ny954UP7dfyS3+1K6B4x37TGm28B1z9BeL9O7D15ytZ+V/VA5tHuHcBaz3feVf0sObLe0e9LbnVObb50vcqMW9GP98SzhuqV+lvZpKy3iGtP0UKvQey5Ese1yEeycp0d3zxBb3jLewa0kHFF1vf4axLt3do8aWObdBWN03pAbRwV2aNO5X+tkfIpfc5KrCCv5awjhXiX+rSAcXbr3FYIV67v/dgdXrzOA8V52xKvQWq4K1jHVScMyv1FqSCt30bdy/97X7xtJVe8y79LX9hGeuQ4px+gJ8AqNEbxjqgOGfc4DuAGr3ZeMeJc/YNvgOn0VuNd5zBbpngx1Slv/k/bMY7zmAvaR1pkzMZ7zCDvUiY+wbGu8F4h9nYi1vHCXb64x1msBeK8ENQvGuPd5jBDmEdx7vy4TzK7gZiHce76nhHGeww1mG8a453lBYPZB3Gu+IWB7K7QVmH8a7W5kFaPJh1FO9abR6kxQPs62Mwzm2U2jxGiwe0juJdpc1jtPiy5/BzYLyX0WjzGC2+3JvWZTC8K7R5iBaPah3l/bt4m8do8XAhvgcizku3eYwWDxnnOiBinfDZPMRZPGac68AY76JtHuJ1K+5gb4HwLvoKFqLFAw/2FojxLtjmIfIc9GBvQRjvcqkOIs+ht/gARJsXW94h8lxppVFAtHmhVAeR5xy0+ABCmxdKdWzx8UAc1omkOog8B5/iOxDKXSLVQeQ57IOaAaUfVUCg3Jnn0oBIdZvLHeLzqBwVO0ab37zEIRS7lzzXApHqNi5xXN7SQSj3jUscwuUKX8W+h3JnsefgvtxZ7DlAlPuGJQ7ipMZdsWOU+yVfO8JJjaedvcN3uUMUu6udvaP0QwtklztEsbs5jf8G4qgus9whit1foAtA3LfILHeIYncY6AIIoS6v3CGK3WOgC0CEuqxyhyh2l4EuUPrBNWSUO0axuwx0AYgun1HuCAd0TgNdAKLLp5c7xGm83x4P0uWTT+Yhit1vjwfp8qkv4iAu1bjN8QGMLp94zQbhUo3rHo9xYpN4qw6k2J2e1bRgdPmkcsfY3jyPdpBz+bQ78xBHNY7XtwDGcE/Z4UCK3fNo/w9khUs5ssHY3nyPdpThHl/uGEc1zkc7ynCPP7LB2N5cb+0BkOEeu8OBbG/OEx3M5h67w4EEOu+JDiXTxYY6jO3NfaKDyXRxoQ4l0HlPdDjao0IdSqDznuhgonxUqIP49IqG0tY2gxLlY0IdSqBzH+RxonxMqAM5odtBkMfRvn7bAmVp34N2lA0uosvD9Hhql2Qt1MEEOv9rO84Gt7q6wyztO1jbkbSvdHmYpX0X2mEW97Uuj9PjqV2UxS6Pk+N3cFoDpX3xgBaox1O7LEtdHqjHU7ssC10eKMdTuzALXR6px1O7MPNdHqnHU7sws10eKcdTuzSzJzY45/GB0s4EgNI+2+Vh3rk2lHYmAJb2mbevWD2e2qWZ6fJYPZ7apZm5YwO1vlG7PNNdHmp9o3Z5Jlc4qCO6B9/AyTN5UAfW4/egHeeaRcvUCoe1vlG7AhPDHWx94106BSZWOLTRzpuz8kyscGijndoV+B3uaKOdvwylwM8KBzfaqV2Bn+EON9p3cF4DtrY/JoY73GjfwQaHp/1nuMON9h1oR9vfHr+be+mvZwL3Ub70A5xgNNwBR7v7TIeX6H6O5cHetTd41w7zGSbfwI9291EeMNGNhzvYu/YW55kOMNGNDmzwDmsCzjNd6cc3ySDTISY678MdMdGNDmwQE93D+XCHTHTDAxvIROd8uEOO9mGmg0x0zod76Yc3w1emw0x0voc75mgfZDrMRPdw3eUht/bH4JwONNG5vk8HOtq/z+lAE53nLo/a478zHax2vyscao//znSlv5J53HZ52B7fa4dNdH67PG6P7zMdsHavWR63x/faYYP8w+2JTenHtkSnHfD6ZE9pgVmAnse3dFEeN8g/nIY63ED36LWDnsi3eAx1wIHu0Uf50l/HMg5DHXSxd6fyyEH+4bHcsYu9i/Lg2v2VO/D2Frji728BbzsceLF3Gxy6dm/lDl7s3b0q6P0t4Kvc4Yv9s8HBa/dV7vDF/tEOvbY3eArz+MX+WdxLfxURODqqw97ZG87I9ye/8VPu0KfxH64e1vYGN6mu9IOKwY92L6kOP889Ptrh1/YGH23eQZ4L+NHuI9WVfkiRONLuoc27aPGPVjv+aU0Lfpt30uLb8xov2vHTfOkHFI0r7eht3sFBzQdf2rGvU3o4qPlw9nE224E83t0M9oc77cjjvfSjScGbdtzt3c9gfzjUjhrrvGzsLWcfL+C+KS14El/Ww6G8jzcxPYixzlGIb3CoHdC7N+sutcN597S6tbjUDrbG+bPuVDuUd4fWvWoH8u7RulvtMN5dWverHcS7T+uOtUPkeafWw/Uar9oBvLvb1/9wrP3xLHw+79e6a+2F38s4O4cf4Ft7yfewrt60jnGuvVigr1xbv3jXXijYOR7rAccL3B8FBrznsR7Yg3bzRu+7wQeAtT+fz1dDxP/UtOAjGvznK6+/he3PQQNA7bXt91Dje/3h2SX6iFJ/Db78qnq/0OyDaR8L71gXb1Xw66U+/ZVguQfS/pxR3rLe6i0m/HqpL/74wahH0f5c7dIRT1y906//7K1/GxDmrwj35J+vqA6d21+lWJce9+9/l1//buW1JxTpeqHoiY/IldH/7qq0+OK/FRNX6H/PXvofGP0vjviJk/4HKlJYe7qjiDqRFx/jKPlfWlL8ueRnj2Z15JgjMtFwF9WRs9aIcgf753Ifa5A7huMGo1TJR9VkdqIoNePLfZrFhoKMOxMXKPnI6LXhxKDQ8X4p7RsTd2SVLJ8ArRmJ3LA3fitFOv29zB//21yI0VUSeSYw/sfH79bbDwcLFPypxMcRiizXCVWSpj7p9FzkW7Gf8CU+hVLqPkxSlTxr96uKkt+XCG0M5tftC3zCtNwrk/SxGF7hv6uR/yq8Gn1lvBqXOxI0TnYXe+2i70uKHnKKfiem3u0/T174BK3c/Sbp97yWP8FX678VI39gXqbgFV75GH4jN2PtKq9J7MXrvNm3+z7Otn8HTumtqHWn17rHY+bdVrveJQhL8YqXt6y8t3/+z+iYTvXOk5V43Rt7Rt/EyfBP+2rfdDO4sqJ/W8/Gu+FfdLa42Kp7PdHkTrbmN9BxabVbLO5Gv6GodmUl75VOOhbntO3abvFhw3a/l1ppmH/Z/daNwYvYdm23WNxNf0lNeMrrT/QB+hHl/NGuvsGZf+iE2F30TTc18lCPdVbai3zkhID5As7/Mxjv9382Ub7As2sf4JZoX8Z5QHu8n2y0F/08qaxfN7TK7TPotvnP/qa9wZX/mNCka1Jzv2xtiaKNv/1NeYMr/2GRDVX1WpH/+3kKxVBt893+pvuLMSBP8sPnAtXz8/kizf/xam5alf7KBmi2+fOfdsUoX77Fe0Qzzd//tCu+gyv9AJ2ieGhz+tOuF+Vh/0ojOmpt/i/IK0Z5kDznELU2f+21q53KYwUlV2iV+/lLu1KmY7Hno1Xu39qVMh2LfQNKqe70pV0n03F524JSuX9ZV8p0LPZNqJT7d6LTyXQs9o1oSLkNtGtkOhb7RjTK/T7QrpDpWOybkZcySHQqmY7Fvhn5cr8MrCu8e2Wxb0c+zA9Hu8K7Vxa7AOLlfh5plx7uPKCTQLzc7yPt0sOdr95EkD6ZH1mXPrBhscsgfL3qOtYuPNxZ7ELIlvt4tEsP99JPazfIhrrxaBce7tzepJANdT/WZYc7tzcxJLv8eGsXHu4MdHJIlvvvaBcd7gx0gshpmRjtosOdPV4QuVB3mbAueCzPHi+JXJefGu2C79zZ40URC3VTo11wuJd+TjtDrMtPWhdb4djjZZHq8r8nsy1CKxx7vDBCXX66x4t1eeZ4YYS6/NT6FpBZ4djjpZF5DTe5vjWI/ON5Hi+OiJfp9U2sy7PHiyPS5U+z2kW6fOlntEMkuvx8jxc5qGOPl0dihZvv8SJdnuubAgIr3FyOF+ryHO0KbB/uCz3+n0CW5/qmwfbhvtTjBbo8R7sKm7Uv9XiBLs/RrsLW4b7c47dn+dLPZ6dsHe7LPX5zl+do12HrcJ8/q2nZ+PaVo12JbVpWevy/rW9fOdqV2Dbc5965SnV5bu1KbBvuaz1+a6gr/XR2y6bhvhboAltuUnK0a7HpWH69x29b3aldjQ1W1gPdxi7P0a7GhkwX0+M3hbrSz2bHbMh064EukL+687BGj/xMN3dRekz26k7timRrjwl0gexQx0SnSK6UqEC3qdyZ6BTJzXSxxZ4f6ko/mV2Tm+niAl0gd4cr/WR2TWami9veWvJO6pjoNMk8p1u+VjMkb4djolMly0ns9taSFer41lWVrEwXH+gCWTscg7wqOdrjt7f8ci/9XHZOTpRPK/a8ci/9XHZORpS/xG9vLaf0cmeQ1yUjyqcWe065M8grk649tdhzjmyoXZlkIylHNR3JJ7QM8sokR/n0Ys8od2pXJjXK5xR7ermXfiq7J1V7TrEnlzuDvDaJG1xesaeWO7Vrk7jB5RV7arkzyKuT5CO32BPLndrVSdKeW+yJR3V8/6ZOygaXX+xpR3Xc39RJ0J58Gp9b7tSuTsIGl34an1nupZ/JAYjXvqnYk8q99DM5APGL+7ZiTyh3ru36RC/uqZdqfom9REvt+kRr31rs8ZdoqV2fWO1p12U3lTtPawyI1J5yN36OyCNaajcgTsWWk5qeuFRH7QZEnddsXN464pY4ntYYEKV9e55riSp3ajcgRvv25a0jJtVRuwEx2iXyXEtMqqN2AyJOZ2XyXEvEi/fST+QQrGsXynMf1lNd6SdyCNa1S+W5lvWzutJP5BCsapc4n/tmtc2XfiKHYFW7XJ5rWV3eSz+RQ7B2KC+Z51pWlne+ibFgRbtsnmtZXt6p3YIV7dItPrDc5qndgmXt8i0+sNjmqd2CRe0aLT6w1Oap3YJF7RotPrDU5qndgiXtOi0+sNDmqd2EeQFaLT4wf2jDWxYmzGvXavGB+TZP7SbMWpc9ix8zezZP7SbMPX7ps/gxc22e2k2YefoXzRbfMLPFUbsJRVp84D493qndhGnrertbz/QWR+0mTLd4xd2tZ3K8U7sJk9pNrP87TY13ajdhyrr+YG+ZGu/UbsKEdYvB3jIx3qndhN8Hf7Vp8Q2/453aTfh57vob+zc/453aTSg22Ft+Duep3YRyg/3jndpLMB7sxtZ/Yh21mzAa7IZxrmMY63jNwoLh7RrbONdxpXZrhtqLWB+e1lG7BQPttiG+Z3BaV/qJHIJv7dYhvudE7bZ8abcP8T1fcZ6fZmFAr93yTHbJO7Ub8Ke9xOr2zY3aDem0l1ndprxTuwGd9uLW/9Y4ajegKru6ffPxTu0GVDDWu7dx1G5AVXZhH9J4598DM6ACst4e1/EVnAEVkvWm3qndgDeU9VDvfBejT1X0SHaKO8tdnarwkewUZ3pXBtE6vWuDaT1453zXA9V67Z25To03rHXmeT2QrYf9nd41QNvXx9T1zsN5cdCtN+d19C7MC956Xe9XepfFg/Xm/TvfxgnyBHm/vga9S+LF+r9wv44HdjJUz/K3JeO58cBOhArgjmwKPKiVAPuQZoo7F7nNvNxZb7wz2G3i6WJxG1MHega7fCpHEX7AicEuH29h7ps62HHAZ/F2bJ0DPhePYe6bOwd8OpXPMPcNB3wydYP3GeYGnPn7cUnUDd7xWO+581dm4gkN3vVY76k3eDb6OCqUX2MWgY0+jpfrve0XNvoIdtTgO0KjZ8Ev8tpFgh9z5kcfLFGXuu8jmjnuLPh53rvKckNuLPhp6lLfV5YbUic7FvwvdanvLcuNYMH/sPNSb2HBj9h/qbfc+LFWPYco9RZG+j9eByn1ljMLPvB+7uRtWyzhg2qPHu1Cf9/trj7H+ejR7lj9/Y9THe2OK/59nCg3JnT6Y474Q/b3nvAZxccb8dVB+3vP6YAjvpZ+rPw+xdFGfC39yP29J4z4o4h/U3rPPWS7A4gP8f186KE+ovn7EzsXX0s/eJKb4Lxz8ZQ+w57FU/oCQfwew93rQemLnEOq39cBTkXpEdz3Jb5q9nRKX+ce/lrwPoZ8GOmUHsvpdtlByVevWvqVhzMJnM7exbcj/fBn78m47vXs7vm0vd6f+ap2zu6+hbDQ+Wr2zUS/cGHbSDPlHy8f5qvQ3DnRZbjffJh/t82dhS7GOeQ7ZPNtnV9Y6MKcgM3TuSqt+ecbKts3GY7OVfnUPMpW15Y5nVvQJrzyRf9uypwZzo5Ts8+HSV9I/Ud5XeZ0bsv99lFv3PCrP+VntvYinDr1T6Oyr+MblUNwun8avq77qjNO5Tjcz7fOvbz8rqvXxq9nznI0evdB/qvaar8Kvj/CaRyb+5f8Vv870X9V9/Nad+e7Fn6jcR/UA/987e03PwDhR6D5IZjgHf6rb9d/vjnGHVLXfl3818sjgev1eq51s773wOkefgSaH4Ipwn9Vuz6K7P8BYQqVUoIBhDAAAAAASUVORK5CYII=';


export {
  ADMIN_ROLE,
  BOOKING_TIME_MILLISECONDS,
  DEFAULT_COMMENT,
  BOOKS_BG_COLORS,
  USER_AVATAR,
}
