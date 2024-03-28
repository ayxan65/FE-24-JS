
# import time
# def customrandom():
#     a=156432
#     b=5643789432
#     m=4096
#     current=(a*current+b)%m
#     return current/m
# current=int(time.time())



import time

# Basit bir lineer congruential generator (LCG) kullanarak rastgele sayı üreten fonksiyon
def custom_random():
    a = 1664525
    c = 1013904223
    m = 2**32
    custom_random.current = (a * custom_random.current + c) % m
    return custom_random.current / m

# İlk seed değeri
custom_random.current = int(time.time())

# Belirli bir aralıkta rastgele bir tamsayı üreten fonksiyon
def random_int(min_val, max_val):
    return int(custom_random() * (max_val - min_val + 1)) + min_val

# Örnek kullanım
print(random_int(1, 100)) # 1 ile 100 arasında rastgele bir sayı üretir

    