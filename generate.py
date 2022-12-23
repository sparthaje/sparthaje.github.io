
def load_data(data):
    object = dict()
    tag = "n/a"
    html = ""
    raw = ""
    for line in data:
        if line == "":
            continue

        if tag == "n/a":
            tag = line
            continue

        if line == "END":
            object[tag] = raw if html == "" else html
            tag = "n/a"
            html = ""
            raw = ""
            continue
        
        if raw == "":
            raw = line
            continue

        items = line.split(" ")
        temp = raw
        for j in range(len(items)):
            key = "{{j}}".replace("j", str(j))
            temp = temp.replace(key, items[j])
        html += temp

    return object

def main():
    template = open("index.template.html", "r").read().splitlines()
    data = load_data(open("index-data.txt", "r").read().splitlines())

    output = open("index.html", "w")
    for line in template:
        if "{{" not in line:
            output.write(line + "\n")
            continue
        output.write(data[line] + "\n")

main()        
