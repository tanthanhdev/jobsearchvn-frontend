import React from 'react'
import './style.css'
const TopEmployer = () => {
  return (
    <div className="grid wide content">
  <header className="content__header">
    <h1>Nhà tuyển dụng hàng đầu</h1>
  </header>
  <div className="nav_content roww">
    {/* 4 cột */}
    <a href="#" className="nav coll l-3 m-6 c-12 ">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
    <a href="#" className="nav coll l-3 m-6 c-12">
      <div className="sub__nav">
        <img className="nav__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////sHCTrAADrABH0lpnsEhzvV1vrAAnsGCHsCxf84OH2r7D1o6X3srP2qKn4wcLyeXv1nJ7+9/f61NXvTlL4urv+8fH0kZP85+f5xcb4vL36z9Dxc3byf4HtLDLtJy7zhIbxa27uP0TwZGftMznwXGDuSk/zi43sIir729ztO0D96uvOqoZdAAAEnElEQVR4nO3Y2XqqSBSGYSxEqoxT1KhxjlET4/3fX8NaxSTpTrbDwX76e48sSgp+rAmDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/J0m02bd9MVXPq3Gm9AYE27Gq+6kfN7LtrV3ac16POid/cGzNubPDk5SnC6ksNDCSAqjylU73VHlnk5F7R0SzkxYZwZp1XBpYhfZRspGLtajoh+bpCatslLj76QtjZml/9Zcix0pdLTwJIWn6lVjY6ale9rmtWZ2j4SNOrdKAzbCi8Ph2p/0ZGy1xqdoS2MuexJ9KYZa14vTQqwJu/FF09aMi3uyeetx75EJD652PHyTcyb1c8yNCZMW8jDtovmolPvuCfPrJN0wyh6qkRH3rD9ulHQuE2uVeb01YbTLbum51HfM8A4Jtcdn2fJx6K9jzdf72/ved8tY7vYQ6S29jEaL3qfUhM/XJEwfUfKQyt0gsZPm/ZOb35xw0nxOdbRBN5BSM2n3Xa9j2/K1k5MvOOmmaw2VPSIpfFyRMNbb72pvMX6u1jFgv+T6Lpu1bqejWzub2NvSTWT3pF1JOm109DXyO5jVNQn9svJlyx0yq9MbyH/ZeyXs5wdc5bLZk/3MEzZiXzNUpYQrX/P6Jwmt7xO+85jJh8x0ZvGwhNp14ouyPNKdfDc6zkftc2Um0IR2txoIHa8/Juzpg9iWL2TX/vm4j8cmtI28HBYJB7qORDpRfB6m2ZbEz7/WKQn4XzNNmM80Nv70z6oIVuo1D0y4zsuNYli8VlYYG4VmPCwnrPrNamE3+Z5mlXdO7QKm/diE++8SBq3L5cx93pjw2M2u4/LrPMWl0x+W8NvfMAiWJowqG7d4ek1CG6Xkk1lrNzhJE1G6Kp314zG4j39JWIwCV5m8Z81DQweRDjZrSwmjWLkfEtpdKzHWJpwmaYZ6znAyGeq6ayrvNPdOmC3rQWUuzQzP7dO8pTnkPjRhdOi/pOY63/+44vtNjDmln3UV1DnI76O6wV3UEobVRENT+qlE9lLo1+t2UFvxf7seduRa8h5xrvfz6O1BCX0XyRbcV7+XSj/rLiZbqPzkd6on/O2eRrfAYTP/VtWdtjW1hC2/vfZF/aWid0koH7MXm2MxqV+3Lx1udJ87za96kbDYSt414Yd/RYq2nV5nm63e8jLvXyeWo9l5Nlr67lyMw18n9DONH2/p94Z+qjKelNz2MQkXfkRYF8ah80uDzga6FDec3IRONLr5+dO3p2K18AOi76eq00j4oRE9JmGwr3cY32c79cFSXg+vewOWSWwpz6uYPf1kcHpMwvblnzFJ5/F/DEWX4V0juDGhNenmNr5YAXWo6Ov1rZJ9cqKcMGhvjCtCWmfW2RbxvL6oyfelaSNxkVDa9Am1kP3XFpW50KzT32khh12xVawduEFLHKtvY/3BJhvzZj0oT2nzwT6v2Q+ys2ZHmTqyXfRiLEXtcy9a0OmzP26VHAbP+nbS0e+U/mCTBlu7O21rvjeZJav77LtLJFuapOb2v4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgf+wf0G0PYqEwiSgAAAABJRU5ErkJggg==" alt="TOSHIBA" />
        <span className="nav__description">Toshiba Software Development (Viet Nam) Co, Ltd</span>
        <footer className="nav__footer">
          <span className="nav_quantity">2 jobs</span>
          -
          <span className="nav_location">Hà Nội</span>
        </footer>
      </div>
    </a>
  </div>
</div>


  )
}

export default TopEmployer