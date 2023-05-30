class Stack():
     def __init__(self):
          self.container = []
     def push(self, item):
          self.container.append(item)
     def pop(self):
          self.container.pop()
     def show(self):
          print(self.container)
obj = Stack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.show()
obj.pop()
obj.show()