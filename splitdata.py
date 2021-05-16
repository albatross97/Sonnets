import csv

dict_data = []
with open('data/sonnet.txt', 'r') as in_file:
    stripped = (line.strip() for line in in_file)
    lines = (line.split("\n") for line in stripped if line)
    # index_num = 0
    # index = ""
    # line_num = 0
    # for i in lines:
    #     if len(i[0].split()) == 1:
    #         index_num += 1
    #         index = i[0]
    #         line_num = -1
    #     line_num += 1
    #     more_elements = [len(i[0]),len(i[0].split()),index, index_num, line_num]
    #     i.extend(more_elements)
    #     print(i)

    # output = (line for line in lines if line[-1])
    # for i in output:
    #     print(i)

    with open('sonnets.csv', 'w') as out_file:
        writer = csv.writer(out_file)
        writer.writerow(('text', 'char','word','index','index_num','line'))
        writer.writerows(lines)

