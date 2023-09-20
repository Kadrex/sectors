import re


def create_sql(sector_id: int, name: str, parent_id: int = 'null'):
    return f"INSERT INTO sector VALUES ({sector_id}, '{name.replace(' &amp;', '')}', {parent_id});\n"


tab = 4 * "&nbsp;"
result = {}
with open("data.txt", "r") as file:
    lines = [line.strip() for line in file.readlines()]
    pretty_lines = []
    for line in lines:
        for match in re.finditer(">(.+)<\/option>", line):
            pretty_lines.append(match.group(1))

    current_id = 1
    sql = []
    tab_count_dict = {}
    for line in pretty_lines:
        tab_count = line.count(tab)
        name = line.replace(tab, '')
        tab_count_dict[tab_count] = current_id
        parent_id = 'null'
        if tab_count - 1 in tab_count_dict.keys():
            parent_id = tab_count_dict[tab_count - 1]

        sql.append(create_sql(current_id, name, parent_id))
        current_id += 1

    with open("sql.sql", "w") as file2:
        file2.writelines(sql)


