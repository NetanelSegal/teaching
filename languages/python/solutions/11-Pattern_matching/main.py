def Q1(user_profile):
    if user_profile["id"] <= 0:
        print("Invalid ID")
        return
    match user_profile:
        case {"role": "admin"}:
            print("Admin user")
        case {"role": "user", "id": id}:
            print("Regular user", id)
        case _:
            print("Unknown user")


def Q2(coordinates: tuple[int, int] | tuple[int, int, int] | None):
    match coordinates:
        case (x, y):
            print(f"2D point at {x}, {y}")
        case (x, y, z):
            print(f"3D point at {x}, {y}, {z}")
        case _:
            print("Unknown coordinates")


def Q3(arg):
    match arg:
        case [{"options": {"verbose": True}}, s]:
            print("Starting with verbose mode", s)
        case ["start"]:
            print("Starting")


Q3([{"options": {"verbose": True, "quiet": False}}])
