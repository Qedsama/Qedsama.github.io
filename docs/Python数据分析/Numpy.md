# Numpy 入门笔记

## numpy.array

Numpy最重要的DS。也被称为“向量”

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
>>> a.itemsize
8
>>> a.size
15
>>> type(a)
<type 'numpy.ndarray'>
>>> b = np.array([6, 7, 8])
>>> b
array([6, 7, 8])
>>> type(b)
<type 'numpy.ndarray'>
```

ndarray.ndim 数组的维度。