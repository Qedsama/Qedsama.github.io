# Numpy 入门笔记

## numpy.array

Numpy最重要的DS。也被称为“向量”

### nparray的基本元素
举例：
```python
>>> import numpy as np
>>> a = np.arange(15).reshape(3, 5)  #生成0-14的数组，并reshape成3行5列的数组
>>> a
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14]])
>>> a.shape                          #返回一个tuple，包含各个维度的size
(3, 5)
>>> a.ndim
2
>>> a.dtype.name                     #返回数据类型。nparray是同质的，NumPy 会尝试根据输入的数据推断出合适的数据类型，如果数据类型不一致，NumPy 会进行类型转换以保证数组中所有元素的类型一致。
'int64'
>>> a.itemsize                       #数组中每个元素的字节大小。只和dtype有关
8
>>> a.size                           #数组元素的总数
15
>>> type(a)
<type 'numpy.ndarray'>
```
### 创建nparray

固定元素数组的创建：
```python
>>> b = np.array([(1.5,2,3), (4,5,6)])              #Numpy自动同质化
>>> b
array([[ 1.5,  2. ,  3. ],
       [ 4. ,  5. ,  6. ]])
>>> c = np.array( [ [1,2], [3,4] ], dtype=complex ) #显示指定数组类型
>>> c
array([[ 1.+0.j,  2.+0.j],
       [ 3.+0.j,  4.+0.j]])
```

固定大小的数组初始化：

（数组扩建涉及到内存的重新分配和数组复制，效率相当低）

```python
>>> np.zeros( (3,4) )
array([[ 0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.]])
>>> np.ones( (2,3,4), dtype=np.int16 )                #显式指定数据类型
array([[[ 1, 1, 1, 1],
        [ 1, 1, 1, 1],
        [ 1, 1, 1, 1]],
       [[ 1, 1, 1, 1],
        [ 1, 1, 1, 1],
        [ 1, 1, 1, 1]]], dtype=int16)
>>> np.empty( (2,3) )                                 # 初值不一定，由内存初值决定
array([[  3.73603959e-262,   6.02658058e-154,   6.55490914e-260],
       [  5.30498948e-313,   3.14673309e-307,   1.00000000e+000]])
```

类似于matlab的range设计：

```python
>>> np.arange( 10, 30, 5 )                           #(左端点,右端点,步长)
array([10, 15, 20, 25])
>>> np.arange( 0, 2, 0.3 )                 
array([ 0. ,  0.3,  0.6,  0.9,  1.2,  1.5,  1.8])

>>> from numpy import pi
>>> np.linspace( 0, 2, 9 )                 # linspace可以设置数量
array([ 0.  ,  0.25,  0.5 ,  0.75,  1.  ,  1.25,  1.5 ,  1.75,  2.  ])
>>> x = np.linspace( 0, 2*pi, 100 )        # linspace实际应用
>>> f = np.sin(x)
```

### nparray的基本操作

数组的运算（四则运算，逻辑运算）都会直接作用于每个元素，包括乘积。

因此，如果希望使用矩阵乘法，需要使用运算符@或函数dot：

```python
>>> a = np.array( [20,30,40,50] )
>>> b = np.arange(4)                  #缺省值
>>> b
array([0, 1, 2, 3])
>>> c = a-b
>>> c
array([20, 29, 38, 47])
>>> b**2
array([0, 1, 4, 9])
>>> 10*np.sin(a)
array([ 9.12945251, -9.88031624,  7.4511316 , -2.62374854])
>>> a<35
array([ True, True, False, False])



>>> A = np.array( [[1,1],
...             [0,1]] )
>>> B = np.array( [[2,0],
...             [3,4]] )
>>> A * B                       #逐元素乘法
array([[2, 0],
       [0, 4]])
>>> A @ B                       #矩阵乘法
array([[5, 4],
       [3, 4]])
>>> A.dot(B)                    #矩阵乘法
array([[5, 4],
       [3, 4]])


>>> a = np.random.random((2,3))
>>> a
array([[ 0.18626021,  0.34556073,  0.39676747],
       [ 0.53881673,  0.41919451,  0.6852195 ]])
>>> a.sum()
2.5718191614547998
>>> a.min()
0.1862602113776709
>>> a.max()
0.6852195003967595
```

### nparray的索引、切片和迭代

索引：逗号索引

切片：可以分别切片

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr[:2, 1:])  # 获取前两行，从第二列开始到末尾的子数组
```

迭代可以正常利用循环进行。

### nparray的重塑，堆叠和拆分操作：

#### 数组重塑
```python
>>> a.ravel()      #平坦化
>>> a.T            #转置
>>> a.reshape(6,2) #重塑为某个形状（6行2列）
>>> a.resize((2,6))#重塑为某个形状（2行6列）
```

注意，reshape可以指定参数order='F'，相当于多做一次转置。

reshape() 返回一个具有新形状的新数组，不改变原始数组，但要求新形状与原始数组的元素数量一致。

resize() 函数没有返回值，而是直接修改原始数组。如果新数组比原数组小，会删除一些元素；如果新数组比原数组大，会填充一些默认值。

#### 数组堆叠
```python
>>> a = np.floor(10*np.random.random((2,2)))  #向下取整
>>> b = np.floor(10*np.random.random((2,2)))  #向下取整
>>> b
array([[ 1.,  8.],
       [ 0.,  4.]])
>>> np.vstack((a,b))  #将数组 a 和数组 b 沿垂直方向堆叠在一起，生成一个新的数组。在结果数组中，a 在上方，b 在下方
>>> np.hstack((a,b))  #将数组 a 和数组 b 沿水平方向堆叠在一起，生成一个新的数组。在结果数组中，a 在左侧，b 在右侧
>>> np.column_stack((a,b))  #用于将多个一维数组按列堆叠成一个二维数组。如果传入的参数是多个一维数组，它们将会被按列堆叠，生成一个新的二维数组。
>>> a[:,newaxis]   #把一维数组转化为列向量
>>> c = a[:, None] #把一维数组转化为列向量
```

#### 数组拆分

np.hsplit(a,3) 水平分割数组。在第一维度上，把数组水平等分为三份。

np.hsplit(a,(3,4)) 水平分割数组。分为[0,3)列，[3,4)列和[4,.)列三部分。

### nparray的拷贝

直接对新的nparray赋值，并不会创建一个新数组，不涉及拷贝，而是直接申请一个“内存指针”指向已经存在的数组。

```python
>>> a = np.arange(12)
>>> b = a            #不拷贝，相当于声明了一个新的“指针”
>>> b is a           
True
>>> b.shape = 3,4    #在同一块内存上操作
>>> a.shape
(3, 4)
```

同时，函数调用的传参也是这样的。

浅拷贝：数据空间一致，但是数组参数不一致。

```python
>>> c = a.view()
>>> c is a
False
>>> c.base is a                        #c和a的数据空间是一致的，对于数据内容的修改会影响到a
True
>>> c.flags.owndata
False
>>>
>>> c.shape = 2,6                      #修改c的数组形状，不会影响a的形状
>>> a.shape
(3, 4)
>>> c[0,4] = 1234                      #修改c的数据内容，会影响a的内容
>>> a
array([[   0,    1,    2,    3],
       [1234,    5,    6,    7],
       [   8,    9,   10,   11]])
```

深拷贝：完全复制。使用copy()方法。

### nparray的广播机制

Numpy设计了一套Broadcasting机制。

最基础的例子：
```python
>>> a = np.array([1.0, 2.0, 3.0])
>>> b = 2.0
>>> a * b                          #在计算过程中，b被暂时的拉伸为向量
array([ 2.,  4.,  6.])
```

这样使得许多无法计算的向量组合可以计算。

实际上，广播机制把“size1\==size2”扩展到了“size1\==size2||size1\==1||size2\==1”

只需要满足上述式子，就可以计算。

例：
```python
A      (4d array):  8 x 1 x 6 x 1
B      (3d array):      7 x 1 x 5
Result (4d array):  8 x 7 x 6 x 5
```

### 一些索引技巧

Numpy支持更多的花式索引方法。

#### 数组索引

Numpy支持利用数组进行索引。

对于多维数组，这样的索引只针对第一维。

```python
>>> palette = np.array( [ [0,0,0],                
...                       [255,0,0],           
...                       [0,255,0],            
...                       [0,0,255],          
...                       [255,255,255] ] )   
>>> image = np.array( [ [ 0, 1, 2, 0 ],         
...                     [ 0, 3, 4, 0 ]  ] )
>>> palette[image]                       
array([[[  0,   0,   0],
        [255,   0,   0],
        [  0, 255,   0],
        [  0,   0,   0]],
       [[  0,   0,   0],
        [  0,   0, 255],
        [255, 255, 255],
        [  0,   0,   0]]])
```

当然，也可以创建多维索引。

应用：搜索时间序列最大值：

```python
>>> time = np.linspace(20, 145, 5)                 # time scale
>>> data = np.sin(np.arange(20)).reshape(5,4)      # 4 time-dependent series
>>> time
array([  20.  ,   51.25,   82.5 ,  113.75,  145.  ])
>>> data
array([[ 0.        ,  0.84147098,  0.90929743,  0.14112001],
       [-0.7568025 , -0.95892427, -0.2794155 ,  0.6569866 ],
       [ 0.98935825,  0.41211849, -0.54402111, -0.99999021],
       [-0.53657292,  0.42016704,  0.99060736,  0.65028784],
       [-0.28790332, -0.96139749, -0.75098725,  0.14987721]])
>>>
>>> ind = data.argmax(axis=0)                  # index of the maxima for each series
>>> ind
array([2, 0, 3, 1])
>>>
>>> time_max = time[ind]                       # times corresponding to the maxima
>>>
>>> data_max = data[ind, range(data.shape[1])] # => data[ind[0],0], data[ind[1],1]...
>>>
>>> time_max
array([  82.5 ,   20.  ,  113.75,   51.25])
>>> data_max
array([ 0.98935825,  0.84147098,  0.99060736,  0.6569866 ])
>>>
>>> np.all(data_max == data.max(axis=0))
True
您还可以使用数组索引作为分配给的目标：

>>> a = np.arange(5)
>>> a
array([0, 1, 2, 3, 4])
>>> a[[1,3,4]] = 0
>>> a
array([0, 0, 2, 0, 0])
```

