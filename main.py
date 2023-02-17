radio.set_group(61)

def on_forever():
    basic.show_string("R1")
    radio.send_number(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 180))
basic.forever(on_forever)
